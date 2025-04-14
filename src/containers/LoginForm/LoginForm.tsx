import React from 'react';
import {
    Container, Typography, TextField, Button, Box, Checkbox, FormControlLabel, Modal
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginModalOpenAction } from '../../features/app';
import { selectLoginModalOpen } from '../../features/app/app.selectors';
import { requestAuthenticate } from '../../features/auth/auth.actions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './LoginForm.module.scss';
import { enqueueSnackbar } from 'notistack';
import { setAuthenticateErrorAction } from '../../features/auth';
import { selectAuthInfo } from '../../features/auth/auth.selectors';

// Schema validation với Yup
const schema = yup.object().shape({
    email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
    password: yup.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự').required('Mật khẩu là bắt buộc'),
});

const LoginForm: React.FC = () => {
    const authInfo = useSelector(selectAuthInfo);
    const dispatch = useDispatch();
    const open = useSelector(selectLoginModalOpen);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    React.useEffect(() => {
        if (authInfo.authenticateError) {
          enqueueSnackbar({ message: authInfo.authenticateError, variant: "error", autoHideDuration: 2000 })
        }
        dispatch(setAuthenticateErrorAction(null))
      }, [authInfo?.authenticateError]);

    const onSubmit = (data: any) => {
        dispatch(requestAuthenticate({ email: data.email, password: data.password }));
    };

    return (
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => dispatch(setLoginModalOpenAction(false))}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Container maxWidth="xs" className={styles.loginForm}>
                {/* Header */}
                <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
                     <img className={styles.logo} src={"ChaoLuatSu-logo.png"} />
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Đăng nhập
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử dụng chung sẽ bị khóa.
                    </Typography>
                </Box>

                {/* Form */}
                <Box component="form" noValidate sx={{ marginBottom: 3 }} onSubmit={handleSubmit(onSubmit)}>
                    {/* Email */}
                    <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom>
                        Tên đăng nhập
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Email hoặc Username"
                        variant="outlined"
                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        sx={{
                            marginBottom: 2,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: '#d32f2f' },
                                '&:hover fieldset': { borderColor: '#d32f2f' },
                                '&.Mui-focused fieldset': { borderColor: '#d32f2f' },
                            },
                        }}
                    />

                    {/* Password */}
                    <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom>
                        Mật khẩu
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Mật khẩu"
                        type="password"
                        variant="outlined"
                        {...register('password')}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        sx={{
                            marginBottom: 2,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: '#d32f2f' },
                                '&:hover fieldset': { borderColor: '#d32f2f' },
                                '&.Mui-focused fieldset': { borderColor: '#d32f2f' },
                            },
                        }}
                    />

                    <FormControlLabel
                        control={<Checkbox className={styles.rememberMeCheckbox} />}
                        label="Ghi nhớ đăng nhập"
                        sx={{ marginBottom: 2 }}
                    />

                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        className={styles.loginButton}
                    >
                        Đăng nhập
                    </Button>
                </Box>

                {/* Footer */}
                <Typography variant="body2" textAlign="center" gutterBottom>
                    Bạn chưa có tài khoản?{' '}
                    <Button variant="text" sx={{ textTransform: 'none', padding: 0, minWidth: 0, color: '#d32f2f' }}>
                        Đăng ký
                    </Button>
                </Typography>
                <Typography variant="body2" textAlign="center" sx={{ color: '#d32f2f' }}>
                    Quên mật khẩu?
                </Typography>

                <Typography
                    variant="caption"
                    display="block"
                    textAlign="center"
                    color="textSecondary"
                    sx={{ marginTop: 3 }}
                >
                    Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với điều khoản sử dụng.
                </Typography>
            </Container>
        </Modal>
    );
};

export default LoginForm;
