import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Toolbar from './Toolbar';
import UniversityCard from './UniversityCard';
import { universityActions } from '../../../redux/univeristy/university.actions';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
  },
  productCard: {
    height: '100%'
  }
}));

const UniversityListView = () => {
  const classes = useStyles();
  const university = useSelector((state) => state.university);
  const [textInput, setTextInput] = useState('columbus');
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const dispatch = useDispatch();
  const changeSearchValue = (textInput) => setTextInput(textInput);
  function sliceList(universityList) {
    return universityList.slice((page - 1) * 5, page * 5);
  }

  useEffect(() => {
    if (textInput.length > 3) {
      dispatch(universityActions.searchUniversity(textInput));
    } else {
      dispatch(universityActions.cleanList());
    }
  }, [dispatch, textInput]);

  return (
    <Page
      className={classes.root}
      title="University"
    >
      <Container maxWidth={false}>
        <Toolbar textInput={textInput} changeSearchValue={changeSearchValue} />
        {university.isLoading ? (
          <Box mt={3}>
            <Grid
              container
              spacing={3}
            >
              <CircularProgress />
            </Grid>
          </Box>
        ) : (
          <Box mt={3}>
            <Grid
              container
              spacing={3}
            >
              {sliceList(university.universityList).map((university) => (
                <Grid
                  item
                  key={uuid()}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <UniversityCard
                    className={classes.productCard}
                    data={university}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={Math.ceil(university.universityList.length / 5)}
            page={page}
            onChange={handleChange}
            size="small"
          />
        </Box>
      </Container>
    </Page>
  );
};

export default UniversityListView;
