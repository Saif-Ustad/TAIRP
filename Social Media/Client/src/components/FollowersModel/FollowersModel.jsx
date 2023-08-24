import "./FollowersModel.scss";

import { Modal, useMantineTheme } from '@mantine/core';

import FollowersCard from "../ProfileSide/FollowersCard/FollowersCard";

function FollowersModel({ modelOpen, setModelOpen }) {
    const theme = useMantineTheme();

    return (
        <>
            <Modal
                opened={modelOpen}
                onClose={() => setModelOpen(false)}
                size="60%"
                overlayProps={{
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
                    opacity: 0.55,
                    blur: 3,
                    
                }}
            >

            <FollowersCard location="model"/>
                
            </Modal>
        </>
    );
}

export default FollowersModel;