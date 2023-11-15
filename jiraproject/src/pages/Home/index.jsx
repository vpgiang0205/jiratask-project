import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { actDeleteProject, actListProject } from "../../redux/actions/actProject";

import { Table, Button } from 'antd';
import './home.css'
import { useCheckRole } from "../../hooks/useCheckRole";
export default function Home() {

  const dispatch = useDispatch();
  const user = useCheckRole();
  useEffect(() => {
    dispatch(actListProject())
  }, [dispatch])

  const { data, loading } = useSelector((state) => state.projectReducer)

  const handleDelete = (id) => {
    // Dispatch the actDeleteProject action with the project id
    dispatch(actDeleteProject(id, user.accessToken));
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Project Name',
      dataIndex: 'projectName',
      key: 'name',
    },
    {
      title: 'Category Name',
      dataIndex: 'categoryName',
      key: 'categoryname',
    },
    {
      title: 'Creator',
      dataIndex: 'creator', // Use dataIndex as 'creator' since it's an object
      key: 'creator',
      render: (creator) => creator.name, // Render the creator's name
    },

    {
      title: 'Members',
      dataIndex: 'members',
      key: 'members',
      render: (members) => (
        <ul>
          {members.map((member) => (
            <li className="avatar-container" style={{ float: 'left', marginRight: '-16px' }} key={member.userId}>
              <img
                width={25}
                src={member.avatar}
                alt={member.name}
                style={{ borderRadius: '50%', marginRight: '8px' }}
              />
              <div className="member-name">{member.name}</div>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Actions",
      key: "id",
      render: (project) => (
        <>
          <Button type="primary" className="" value={project.id}>edit</Button>
          <Button type="primary" onClick={() => handleDelete(project.id)} danger value={project.id}>delete</Button>
        </>
      ),
    }

  ];


  const fetchData = () => {
    if (data) {
      console.log(data);
      return <Table rowKey="id" dataSource={data} columns={columns} loading={loading}></Table>
    }
    else if (loading) {
      return <loading />
    }
  }


  return fetchData();
}
