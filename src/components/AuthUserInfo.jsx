const AuthUserInfo = ({email, onSignOut}) => {
  return (
    <div className='authUserInfo'>
      <div className='authUserInfo__email'>{email}</div>
      <button className='authUserInfo__link' onClick={onSignOut}>Выйти</button>
    </div>
  );
}

export default AuthUserInfo;
