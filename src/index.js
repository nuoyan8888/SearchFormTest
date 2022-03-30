import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import {
  Button,
  Tooltip,
  Row,
  Col,
  Tabs,
  Table,
  List,
  Avatar,
  Alert,
  message,
  Divider,
  Modal,
  Space,
} from 'antd';
import {
  PlusOutlined,
  MinusOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    render: (text, record, index) => {
      return (
        <Button
          type="link"
          onClick={() => {
            Modal.info({
              title: '当前用户名称：' + record.name,
            });
          }}
        >
          查看
        </Button>
      );
    },
  },
];

const Demo = () => {
  //Table使用到的数据源
  const [data, setData] = React.useState([
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '东湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '南湖区湖底公园1号',
    },
  ]);

  //List的数据源
  const [ListData, setListData] = React.useState([
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ]);

  //Table添加数据
  const addTableOne = React.useCallback(() => {
    if (data.length <= 4) {
      // const newData = [].concat(data);
      const newData = [].concat(data);
      newData.push({
        name: '邓紫棋',
        age: 18,
        address: '西湖区湖底公园1号',
      });
      setData(newData);
    } else {
      message.info('最多只能添加五条数据！');
    }
  }, [data]);

  //Table删除数据
  const deleteTableOne = React.useCallback(() => {
    data.pop();
    setData([].concat(data));
  }, [data]);

  //List添加数据
  const addListOne = React.useCallback(() => {
    const newListData = [].concat(ListData);
    newListData.push({
      title: 'Ant Design Title ' + (Object.keys(ListData).length + 1),
    });
    setListData(newListData);
  }, [ListData]);

  //List删除数据
  const deleteListOne = React.useCallback(() => {
    ListData.pop();
    setListData([].concat(ListData));
  }, [ListData]);

  const showModal = () => {
    this.setOperation({
      visible: true,
    });
  };

  const hideModal = () => {
    this.setOperation({
      visible: false,
    });
  };

  const { TabPane } = Tabs;

  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          <Alert message="最多为表格添加五条数据！" type="warning" showIcon />
          <Divider />
          <Row gutter={[16, 12]}>
            <Col span={6}>
              <div>
                <Button icon={<PlusOutlined />} onClick={addTableOne}>
                  新增
                </Button>
              </div>
            </Col>
            <Col span={6}>
              <div>
                <Button icon={<MinusOutlined />} onClick={deleteTableOne}>
                  删除
                </Button>
              </div>
            </Col>
          </Row>
          <br />
          <Table dataSource={data} columns={columns} />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <Row gutter={[16, 24]}>
            <Col span={6}>
              <div>
                <Button icon={<PlusOutlined />} onClick={addListOne}>
                  新增
                </Button>
              </div>
            </Col>
            <Col span={6}>
              <div>
                <Button icon={<MinusOutlined />} onClick={deleteListOne}>
                  删除
                </Button>
              </div>
            </Col>
          </Row>
          <br />
          <List
            itemLayout="horizontal"
            dataSource={ListData}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </TabPane>
      </Tabs>
    </>
  );
};

ReactDOM.render(
  <div>
    <Demo />
  </div>,
  document.getElementById('container')
);
