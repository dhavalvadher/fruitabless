import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { addcoupon } from '../../../redux/slice/coupon.slice';





function Coupon(props) {
    const [open, setOpen] = React.useState(false);
    // const [data, setData] = React.useState([]);
    const [update, setUpdate] = React.useState(null)

    const dispatch = useDispatch();


    const coupon = useSelector(state => state.coupon);
    console.log(coupon);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        formik.resetForm(true)
        setUpdate(false)
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'coupon', headerName: 'coupon', width: 130 },
        { field: 'percentage', headerName: 'percentage', width: 130 },
        { field: 'expiry', headerName: 'expiry', width: 130 },
        // {
        //     field: 'Action',
        //     headerName: 'Action',
        //     width: 130,
        //     renderCell: (params) => (
        //         <>
        //             <IconButton aria-label="delete" onClick={() => hendalEdit(params.row)}>
        //                 <EditIcon />
        //             </IconButton>
        //             <IconButton aria-label="delete" onClick={() => hendaldelet(params.row)}>
        //                 <DeleteIcon />
        //             </IconButton>
        //         </>
        //     )


        // },


    ];


    let couponSchema = object({
        coupon: string().required(),
        percentage: string().required(),
        // expiry: date().required()
    });

    const formik = useFormik({
        initialValues: {
            coupon: '',
            percentage: '',
            // expiry: ''
        },
        validationSchema: couponSchema,
        onSubmit: (values, { resetForm }) => {
            dispatch(addcoupon())
            resetForm();
            handleClose();

        },
    });


    const { handleBlur, handleChange, handleSubmit, values, touched, errors } =formik;
    return (
        <div>

            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Coupon
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}

                >
                    <DialogTitle>Coupon</DialogTitle>
                    <form onSubmit={handleSubmit}>
                        <DialogContent>
                            <TextField
                                margin="dense"
                                id="coupon"
                                name="coupon"
                                label="coupon Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.coupon}
                                error={errors.coupon && touched.coupon ? true : false}
                                helperText={errors.coupon && touched.coupon ? errors.coupon : ""}

                            />
                            <TextField
                                margin="dense"
                                id="percentage"
                                name="percentage"
                                label="percentage"
                                type="number"
                                fullWidth
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.percentage}
                                error={errors.percentage && touched.percentage ? true : false}
                                helperText={errors.percentage && touched.percentage ? errors.percentage : ""}
                            />

                             <TextField
                                margin="dense"
                                id="expiry"
                                name="expiry"
                                label=""
                                type="date"
                                fullWidth
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.expiry}
                                error={errors.expiry && touched.expiry ? true : false}
                                helperText={errors.expiry && touched.expiry ? errors.expiry : ""}
                            /> 
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type="submit">add</Button>
                            </DialogActions>
                        </DialogContent>
                    </form>
                </Dialog>
            </React.Fragment>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={coupon.coupon}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default Coupon;