import React, { useState } from 'react';
import { Button, Modal, notification } from 'antd';
import { Input } from 'antd';
import axios from "axios";
import { createUserApi } from '../../services/api.service';




const UserForm = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const { loadUser } = props

    const resetAndCloseModal = () => {
        setFullName("")
        setEmail("")
        setPassword("")
        setPhone("")

        setIsModalOpen(false)
    }

    const handleAddUser = async () => {
        const res = await createUserApi(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: "Create User Success",
                description: "Tạo người dùng thành công"
            })
            resetAndCloseModal()
            await loadUser()
        } else {
            notification.error({
                message: "Error",
                description: res.message
            })
        }
    }

    return (
        <>
            <Button
                type="primary"
                onClick={() => setIsModalOpen(true)}
            >Create User</Button>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleAddUser}
                onCancel={() => setIsModalOpen(false)}
            >
                <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                    <div >
                        <p>Full Name</p>
                        <Input
                            onChange={(event) => setFullName(event.target.value)}
                            value={fullName}
                        />
                    </div>
                    <div >
                        <p>Email</p>
                        <Input
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                        />
                    </div>
                    <div >
                        <p>Password</p>
                        <Input
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                        />
                    </div>
                    <div >
                        <p>Phone Number</p>
                        <Input
                            onChange={(event) => setPhone(event.target.value)}
                            value={phone}
                        />
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default UserForm