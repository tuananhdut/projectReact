import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const UserTable = (props) => {
    const { listDataUser } = props

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
        },
    ];

    return (<Table
        columns={columns}
        dataSource={listDataUser}
        rowKey={"_id"}
    />)

}
export default UserTable