import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';


const ModalConfirm = ({ open, handleOpen, handleDelete }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: '#f3f4f6',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ display: 'flex', justifyContent: 'center' }}>
                        <b>¿Estas seguro que desea eliminar esta rutina?</b>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                        Una vez eliminada no podra recuperarla
                    </Typography>
                    <Grid sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                        <button
                            className="bg-yellow-400 text-gray-800 py-2 px-4 rounded-full font-semibold cursor-pointer border-none mr-2"
                            onClick={handleOpen}>
                            Cancelar
                        </button>
                        <button
                            className="bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-semibold cursor-pointer border-none mr-2"
                            onClick={handleDelete}
                        >
                            Eliminar
                        </button>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );

}

export default ModalConfirm;