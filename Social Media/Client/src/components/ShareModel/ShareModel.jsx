import "./ShareModel.scss";

import { Modal, useMantineTheme } from '@mantine/core';

import PostShare from "../PostsSide/PostShare/PostShare";

function ShareModel({ modelOpen, setModelOpen }) {
    const theme = useMantineTheme();

    return (
        <>
            <Modal
                opened={modelOpen}
                onClose={() => setModelOpen(false)}
                size="50%"
                overlayProps={{
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
                    opacity: 0.55,
                    blur: 3,
                }}
            >

            <PostShare />    
                
            </Modal>
        </>
    );
}

export default ShareModel;