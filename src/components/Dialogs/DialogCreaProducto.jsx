import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';
import moment from 'moment';

export default function DialogCreaProducto({ open, setOpen, setStatus, setOpenSnackbar, editing, setEditing, data, setSeverity }) {
    const { control, getValues, setValue, handleSubmit } = useForm({
        defaultValues: {
            codigo: '',
            nombre: '',
            precio: '',
        },
    });
    const guardaProducto = async () => {
        try {
            await addDoc(collection(db, "productos"), {
                codigo: getValues('codigo'),
                nombre: getValues('nombre'),
                precio: getValues('precio'),
                registrado: moment(new Date()).format('DD-MM-YYYY'),
                modificado: moment(new Date()).format('DD-MM-YYYY'),
                idUsuario: auth.currentUser.uid,
            });
            setSeverity("success");
            setStatus("PRODUCTO CREADO EXITOSAMENTE");
            setOpenSnackbar(true);
            setOpen(false);
        } catch (e) {
            setSeverity("error");
            setStatus("OCURRIO UN ERROR: ", e);
            setOpenSnackbar(true);
            setOpen(false);
        }
    }
    const actualizaProducto = async () => {
        const update = doc(db, "productos", data.id);
        try {
            await updateDoc(update, {
                codigo: getValues('codigo'),
                nombre: getValues('nombre'),
                precio: getValues('precio'),
                modificado: moment(new Date()).format('DD-MM-YYYY'),
            });
            setOpen(false);
            setSeverity("success");
            setStatus("PRODUCTO EDITADO EXITOSAMENTE");
            setOpenSnackbar(true);
            setEditing(false);
        } catch (e) {
            setOpen(false);
            setSeverity("error");
            setStatus("OCURRIO UN ERROR: ", e);
            setOpenSnackbar(true);
        }
    }

    const onSubmit = () => {
        if (editing) {
            actualizaProducto();
        } else {
            guardaProducto();
        }
    };


    const handleClose = () => {
        setEditing(false);
        setOpen(false);
    };

    React.useEffect(() => {
        if (editing) {
            setValue("codigo", data.row.codigo);
            setValue("nombre", data.row.nombre);
            setValue("precio", data.row.precio);
        }
    }, []);

    return (
        <Dialog open={open} onClose={handleClose}>
            {editing ? <DialogTitle>EDITA UN PRODUCTO</DialogTitle> : <DialogTitle>CREA UN PRODUCTO</DialogTitle>}

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