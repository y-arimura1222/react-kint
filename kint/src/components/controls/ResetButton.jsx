import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { localStorageKey } from '../data/localStorageKey';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
  },
  buttonContainer: {
    width: '50%',
    textAlign: 'right',
    margin: '0 auto',
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));

export const ResetButton = () => {
  // console.log('reset');
  const classes = useStyles();

  const keys = localStorageKey();

  const onClickReset = () => {
    alert('localStorage の打刻データを削除しますか？');
    keys.map((key) => (
      localStorage.removeItem(key.id)
    ))
    window.location.reload();
  }

  return (
    <div className={classes.container}>
      <div className={classes.buttonContainer}>
        <Button
          onClick={onClickReset}
          variant="contained"
          color="secondary"
          size="large"
          className={classes.button}
          startIcon={<RotateLeftIcon />}
        >
          RESET
        </Button>
      </div>
    </div>
  );
}
