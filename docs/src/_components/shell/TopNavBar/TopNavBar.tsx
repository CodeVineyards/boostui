import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import SocialLink from '@/_components/widgets/SocialLink/SocialLink';
import Logo from '@/widgets/Logo';
import NavDropDown from '@/widgets/NavDropDown';
import SearchBar from '@/widgets/SearchBar';

const TopNavBar = () => {
  const style1 = {
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
    flexGrow: 1,
  };

  const style2 = {
    display: 'flex',
    gap: '1em',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div style={style1}>
          <Logo />
          <NavDropDown />
        </div>
        <div style={style2}>
          <SearchBar />
          <SocialLink />
          <SocialLink />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
