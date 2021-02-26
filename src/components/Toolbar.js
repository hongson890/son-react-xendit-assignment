import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Box, Card, CardContent, InputAdornment, makeStyles, SvgIcon, TextField } from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className, textInput, tooltip, placeholder, changeSearchValue, ...rest }) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box>
              <Tooltip title={tooltip}>
                <TextField
                  fullWidth
                  value={textInput}
                  onChange={(event) => changeSearchValue(event.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon
                          fontSize="small"
                          color="action"
                        >
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                  placeholder={placeholder}
                  variant="outlined"
                />
              </Tooltip>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
