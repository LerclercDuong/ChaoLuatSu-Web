import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Box, Modal } from '@mui/material';
import styles from './SignUpForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSignUpModalOpenAction } from '../../features/app';
import { selectSignUpModalOpen } from '../../features/app/app.selectors';
import OTPInput from '../../components/atoms/OtpInput/OtpInput';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const SignUpForm: React.FC = () => {
    const dispatch = useDispatch();
    const open = useSelector(selectSignUpModalOpen);
    const [signUpMethod, setSignUpMethod] = useState<string | null>(null);
    const [step, setStep] = useState<'input' | 'verify'>('input');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    const handleSignUp = () => {
        console.log('Sending OTP to:', email);
        setStep('verify');
    };
    return (
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => dispatch(setSignUpModalOpenAction(false))}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Container maxWidth="xs" className={styles.loginForm}>
                <Box sx={{ textAlign: 'center', padding: 3 }}>
                <img src="ChaoLuatSu-logo.png" alt="Chao luat su Logo" className={styles.logo} />
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Đăng ký tài khoản
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người dùng chung sẽ bị khóa.
                    </Typography>
                </Box>

                {/* Chuyển đổi giữa phương thức đăng ký */}
                {signUpMethod === null && (
                    <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                        <Grid item xs={12}>
                            <Button
                                className={styles.methodButton}
                                fullWidth
                                variant="outlined"
                                sx={{ padding: '10px 0', textTransform: 'none' }}
                                startIcon={<i className="fab fa-google"></i>}
                                onClick={() => setSignUpMethod('google')}
                            >
                                Đăng ký với Google
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                className={styles.methodButton}
                                fullWidth
                                variant="outlined"
                                sx={{ padding: '10px 0', textTransform: 'none' }}
                                startIcon={<i className="fab fa-facebook"></i>}
                                onClick={() => setSignUpMethod('facebook')}
                            >
                                Đăng ký với Facebook
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                className={styles.methodButton}
                                fullWidth
                                variant="outlined"
                                sx={{ padding: '10px 0', textTransform: 'none' }}
                                startIcon={<i className="fab fa-github"></i>}
                                onClick={() => setSignUpMethod('github')}
                            >
                                Đăng ký với Github
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                className={styles.methodButton}
                                fullWidth
                                variant="outlined"
                                sx={{ padding: '10px 0', textTransform: 'none' }}
                                startIcon={<i className="fas fa-envelope"></i>}
                                onClick={() => setSignUpMethod('email')}
                            >
                                Sử dụng email / số điện thoại
                            </Button>
                        </Grid>
                    </Grid>
                )}

                {/* Form đăng ký bằng Email */}
                {signUpMethod === 'email' && step === 'input' && (
                    <Box>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom>
                            Tên đăng nhập
                        </Typography>
                        <TextField fullWidth variant="outlined" onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                marginBottom: 2,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: "50px",
                                    '& fieldset': {
                                        borderColor: '#FF9800', // Viền cam
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#FF5722', // Viền cam đậm hơn khi hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#FF5722', // Viền cam khi focus
                                    },
                                },
                            }}

                        />
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom>
                            Mật khẩu
                        </Typography>
                        <TextField fullWidth type="password" variant="outlined" sx={{
                            marginBottom: 2,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: "50px",
                                '& fieldset': {
                                    borderColor: '#FF9800', // Viền cam
                                },
                                '&:hover fieldset': {
                                    borderColor: '#FF5722', // Viền cam đậm hơn khi hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FF5722', // Viền cam khi focus
                                },
                            },
                        }}
                        />
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom>
                            Nhập lại mật khẩu
                        </Typography>
                        <TextField fullWidth type="password" variant="outlined" sx={{
                            marginBottom: 2,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: "50px",
                                '& fieldset': {
                                    borderColor: '#FF9800', // Viền cam
                                },
                                '&:hover fieldset': {
                                    borderColor: '#FF5722', // Viền cam đậm hơn khi hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FF5722', // Viền cam khi focus
                                },
                            },
                        }} />
                        <Button className={styles.signUpButton} fullWidth variant="contained" sx={{ marginBottom: 2 }} onClick={handleSignUp}>
                            Đăng ký
                        </Button>
                        <Button variant="text" sx={{ marginBottom: 2, color: '#ff5722' }} onClick={() => setSignUpMethod(null)}>
                            <ArrowBackIcon /> Quay lại
                        </Button>
                    </Box>
                )}
                {/* Bước 2: Nhập mã OTP */}
                {signUpMethod === 'email' && step === 'verify' && (
                    <Box>
                        <Typography variant="body2" gutterBottom>
                            Nhập mã xác nhận đã gửi đến  <strong>{email}</strong>
                        </Typography>
                        <OTPInput length={6} />


                        <Button className={styles.verifyButton} fullWidth variant="contained" sx={{ marginBottom: 2 }}>
                            Xác nhận
                        </Button>

                        <Button variant="text" sx={{ color: '#ff5722' }} onClick={() => setStep('input')}>
                            <ArrowBackIcon /> Quay lại
                        </Button>
                    </Box>
                )}
                {/* Quay lại màn hình chọn phương thức nếu đã chọn đăng ký bằng Google/Facebook/Github */}
                {signUpMethod && signUpMethod !== 'email' && (
                    <Box textAlign="center">
                        <Typography variant="body1" gutterBottom>
                            Bạn đã chọn đăng ký với {signUpMethod.toUpperCase()}.
                        </Typography>
                        <Button variant="text" sx={{ marginBottom: 2, color: '#ff5722' }} onClick={() => setSignUpMethod(null)}>
                            <ArrowBackIcon /> Quay lại
                        </Button>
                    </Box>
                )}

                <Typography variant="body2" textAlign="center" sx={{ marginBottom: 2 }}>
                    Bạn đã có tài khoản?{' '}
                    <Button variant="text" sx={{ textTransform: 'none', padding: 0, minWidth: 0, color: '#ff5722' }}>
                        Đăng nhập
                    </Button>
                </Typography>

                <Typography variant="body2" textAlign="center" color="textSecondary">
                    Quên mật khẩu?
                </Typography>

            </Container>
        </Modal>
    );
};

export default SignUpForm;
