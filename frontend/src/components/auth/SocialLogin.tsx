import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import setCookie from '.???';

interface Props {
  getUserData: Function;
}

function SocialLogin({ getUserData }: Props) {
  // const params = useParams();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const tokens = params.params;
  //   const refresh_start = tokens?.search('refreshtoken=');
  //   const access_start = tokens?.search('accesstoken=');
  //   if (refresh_start === 0 && access_start) {
  //     const refreshtoken = tokens?.slice(refresh_start + 13, access_start - 1);
  //     const accesstoken = tokens?.slice(access_start + 12, tokens.length);
  //     sessionStorage.setItem('token', accesstoken || '');
  //     // setCookie('refresh_token', refreshtoken || '');
  //     /* eslint-disable */
  //     getUserData(params.params || '');
  //     navigate('/');
  //   } else {
  //     navigate('/auth/login');
  //   }
  // }, [navigate]);
}

export default SocialLogin;
