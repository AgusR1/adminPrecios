import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';
import moment from 'moment';

export default function DialogCreaProducto({ open, setOpen, setStatus, setOpenSnackbar, setRows }) {
    const { control, getValues, handleSubmit } = useForm({
        defaultValues: {
            codigo: '',
            nombre: '',
            precio: '',
        },
    });
    const guardaProducto = async () => {
        try {
            const docRef = await addDoc(collection(db, "productos"), {
                codigo: getValues('codigo'),
                nombre: getValues('nombre'),
                precio: getValues('precio'),
                registrado: moment(new Date()).format('DD-MM-YYYY'),
                modificado: moment(new Date()).format('DD-MM-YYYY'),
                idUsuario: auth.currentUser.uid,
            });
            setStatus("PRODUCTO CREADO EXITOSAMENTE");
            console.log(docRef);
            // setRows(productos => [...productos, {
            //     "id": docRef.id,
            //     "codigo": doc.data().codigo,
            //     "nombre": doc.data().nombre,
            //     "precio": doc.data().precio,
            //     "registrado": doc.data().registrado,
            //     "modificado": doc.data().modificado
            // }]);
            setOpenSnackbar(true);
            setOpen(false);
        } catch (e) {
            setStatus("OCURRIO UN ERROR: ", e);
            setOpenSnackbar(true);
            setOpen(false);
        }
    }

    const onSubmit = (data, e) => {
        guardaProducto();
    };


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Crea un nuevo producto</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <Grid container rowSpacing={2}>
                        <Grid style={{ marginTop: '5px' }} container spacing={2}>
                            <Grid item xs={6} >
                                <Controller
                                    name="codigo"
                                    control={control}
                                    render={({
                                        field: { onChange, value },
                                        fieldState: { error },
                                    }) => (
                                        <TextField
                                            autoFocus={true}
                                            fullWidth
                                            id="codigo"
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                            onChange={onChange}
                                            value={value}
                                            label={'Codigo'}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            size="small"
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <Controller
                                    name="nombre"
                                    control={control}
                                    rules={{ required: 'Campo requerido' }}
                                    render={({
                                        field: { onChange, value },
                                        fieldState: { error },
                                    }) => (
                                        <TextField
                                            autoFocus={true}
                                            fullWidth
                                            id="nombre"
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                            onChange={onChange}
                                            value={value}
                                            label={'Nombre'}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            size="small"
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <Controller
                                name="precio"
                                control={control}
                                rules={{ required: 'Campo requerido' }}
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error },
                                }) => (
                                    <TextField
                                        autoFocus={true}
                                        fullWidth
                                        id="precio"
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        onChange={onChange}
                                        value={value}
                                        label={'Precio'}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        size="small"
                                        type="number"
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Salir</Button>
                    <Button type="submit">Guardar</Button>
                </DialogActions>
            </form>
        </Dialog >
    );
}