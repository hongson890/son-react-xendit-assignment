import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Box, Card, CardContent, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import A from '../../components/A';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));

const UniversityCard = ({ className, data, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {data.name}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {data.country}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              <A
                href={data.web_pages}
                label={data.web_pages}
                target="blank"
              />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

UniversityCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired
};

export default UniversityCard;
