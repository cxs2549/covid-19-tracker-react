import React from "react"
import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import CountUp from "react-countup"
import styles from "./Cards.module.css"
import cx from "classnames"

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
   if (!confirmed) {
      return "Loading..."
   }
   return (
      <div className={styles.container}>
         <Grid container spacing={3} justify="center">
            <Grid
               item
               component={Card}
               xs={12}
               md={3}
               className={cx(styles.card, styles.infected)}
            >
               <CardContent>
                  <Typography className="" color="textSecondary" gutterBottom>
                     Infected
                  </Typography>
                  <Typography variant="h6">
                     <CountUp
                        start={0}
                        end={confirmed.value}
                        duration={1.5}
                        separator=","
                     />
                  </Typography>
                  <Typography color="textSecondary">
                     {new Date(lastUpdate).toDateString()}
                  </Typography>
               </CardContent>
            </Grid>
            <Grid
               item
               component={Card}
               xs={12}
               md={3}
               className={cx(styles.card, styles.recovered)}
            >
               <CardContent>
                  <Typography className="" color="textSecondary" gutterBottom>
                     Recovered
                  </Typography>
                  <Typography variant="h6">
                     <CountUp
                        start={0}
                        end={recovered.value}
                        duration={1.5}
                        separator=","
                     />
                  </Typography>
                  <Typography color="textSecondary">
                     {new Date(lastUpdate).toDateString()}
                  </Typography>
               </CardContent>
            </Grid>
            <Grid
               item
               component={Card}
               xs={12}
               md={3}
               className={cx(styles.card, styles.deaths)}
            >
               <CardContent>
                  <Typography className="" color="textSecondary" gutterBottom>
                     Deaths
                  </Typography>
                  <Typography variant="h6">
                     <CountUp
                        start={0}
                        end={deaths.value}
                        duration={1.5}
                        separator=","
                     />
                  </Typography>
                  <Typography color="textSecondary">
                     {new Date(lastUpdate).toDateString()}
                  </Typography>
               </CardContent>
            </Grid>
         </Grid>
      </div>
   )
}

export default Cards
