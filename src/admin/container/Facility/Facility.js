import React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { object, string, number, date, InferType } from 'yup';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Facility_data } from '../../component/redux/action/counter.action';




function Facility(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let FacilitySchema = object({
        name: string().required(),
        discription: string().required(),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            discription: "",
        },
        validationSchema: FacilitySchema,

        onSubmit: values => {
           dispatch(Facility_data(values))
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, values, touched } = formik


    const Facility = useSelector(state => state.Facility)
    console.log(Facility);

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Facility
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Facility</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            id="name"
                            name="name"
                            label="Add Facility"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            error={errors.name && touched.name ? true : false}
                            helperText={errors.name && touched.name ? errors.name : ""}
                            
                        />
                        <TextField
                            margin="dense"
                            id="discription"
                            name="discription"
                            label="Add Discription"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.discription}
                            error={errors.discription && touched.discription ? true : false}
                            helperText={errors.discription && touched.discription ? errors.discription : ""}
                        />
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Add</Button>
                        </DialogActions>
                    </DialogContent>
                </form>
            </Dialog>
        </div>
    );
}

export default Facility;


