import Head from "next/head";

import { Inter } from "next/font/google";
import styles from "<src>/styles/Home.module.css";
import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import classes from "<src>/styles/index.styles";
import LiguesSelect from "<src>/components/LiguesSelect";
import app from "next/app";
import handler from "./api/data";
import data from "<src>/data/teams.json";
import TeamPowerSelect from "<src>/components/TeamPowerSelect";
import GenerateButton from "<src>/components/GenerateButton";
import GeneratedTeamsResult from "<src>/components/GeneratedTeamsResult";

export default function Home() {
  return (
    <>
      <Head>
        <title>Random Football Teams</title>
        <meta name="description" content="Random Football Teams is a user-friendly application designed to generate two random football teams based on league and strength preferences. Perfect for friends playing PlayStation, this system provides an exciting and unbiased way to assign teams for an enjoyable gaming experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.main}>
        <Container maxWidth="sm">
          <Grid
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <h1 className="app-title">Random Football Teams</h1>
            <div className="selectBoxesWrapper">
              <LiguesSelect data={data} />
              <TeamPowerSelect data={data} />
            </div>
            <GeneratedTeamsResult data={data} />
          </Grid>
        </Container>
      </main>
    </>
  );
}
