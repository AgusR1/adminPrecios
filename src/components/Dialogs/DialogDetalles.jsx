import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, TextField } from '@mui/material';

export default function DialogDetalle({ setOpenDetalle, open, data }) {
    const handleClose = () => {
        setOpenDetalle(false);
    };
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>DETALLES DEL PRODUCTO</DialogTitle>
            <DialogContent>
                <Grid style={{ marginTop: '5px' }} container spacing={2}>
                    <Grid item xs={12} md={12} >
                        <TextField style={{ width: "100%" }} InputProps={{
                            readOnly: true,
                        }} label={'Codigo'} value={data.row.codigo} />
                    </Grid>
                </Grid>
                <Grid style={{ marginTop: '5px' }} container spacing={2} >
                    <Grid item xs={12} md={6} >
                        <TextField style={{ width: "100%" }} InputProps={{
                            readOnly: true,
                        }} label={'Nombre'} value={data.row.nombre} />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <TextField style={{ width: "100%" }} InputProps={{
                            readOnly: true,
                        }} label={'Precio'} value={`$ ${data.row.precio}`} />
                    </Grid>
                </Grid>
                <Grid style={{ marginTop: '5px' }} container spacing={2} >
                    <Grid item xs={12} md={6} >
                        <TextField style={{ width: "100%" }} InputProps={{
                            readOnly: true,
                        }} label={'Registrado'} value={data.row.registrado} />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <TextField style={{ width: "100%" }} InputProps={{
                            readOnly: true,
                        }} label={'Ultima modificacion'} value={data.row.modificado} />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Salir</Button>
            </DialogActions>
        </Dialog >
    );
}