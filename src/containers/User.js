import React from 'react'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import useImage from 'use-image';
import { useRouteData } from 'react-static';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.text.disabled,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100%',
      alignItems: 'center'
    },
    table_container: {
      width: '80%',
      padding: '30px',
    },
    facultyItemItem: {
      padding: '20px'
    },
    card_root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));

function User(props){
    const classes = useStyles();
    const data = {
          'status':1,
          'classify':'0',
          'info': {'name':'?????????',
                   'eng_name':'XiaoyuDu',
                   'phone': '123456789',
                   'email': '111@njust.edu.cn',
                   'profile': '????????????',
                   'address': '??????????????????',
                   'direction': '????????????',
                   'avatar': "'../users/static/avatar/%s' % account"
                   },
          'conference': [
                      {'id':1,'author':['????????????','????????????'],'display':1,'rank':1,'name':'????????????','conferenceName':'????????????','dat':'2020-06-07','citation':'11???','ccf':'A???','link':'????????????'},
                      {'id':2,'author':['????????????','????????????'],'display':1,'rank':2,'name':'????????????','conferenceName':'????????????','dat':'2020-06-07','citation':'11???','ccf':'A???','link':'????????????'},
                      {'id':3,'author':['????????????'],'display':1,'rank':3,'name':'????????????','conferenceName':'????????????','dat':'2020-06-07','citation':'11???','ccf':'A???','link':'????????????'}
                      ],
          'journal': [
                      {'id':1,'author':['????????????','????????????'],'display':1,'rank':1,'name':'????????????','journalName':'????????????','dat':'2020-06-07','citation':'11???','ccf':'A???','link':'????????????'},
                      {'id':2,'author':['????????????','????????????'],'display':1,'rank':3,'name':'????????????','journalName':'????????????','dat':'2020-06-07','citation':'11???','ccf':'A???','link':'????????????'},
                      {'id':3,'author':['????????????','????????????'],'display':1,'rank':2,'name':'????????????','journalName':'????????????','dat':'2020-06-07','citation':'11???','ccf':'A???','link':'????????????'}
                      ],
          'softwareCopyright': [
                      {'id':1,'author':1,'display':1,'rank':2,'name':'?????????','times':'2021-02-03',},
                      {'id':2,'author':1,'display':1,'rank':3,'name':'?????????','times':'2021-02-03',},
                      {'id':3,'author':1,'display':1,'rank':1,'name':'?????????','times':'2021-02-03',},
                      {'id':4,'author':1,'display':0,'rank':0,'name':'?????????','times':'2021-02-03',}
                      ],
          'patent': [
                      {'id':1,'author':1,'display':1,'rank':2,'name':'?????????1','effectDat':'2021-02-03',},
                      {'id':2,'author':1,'display':1,'rank':3,'name':'?????????2','effectDat':'2021-02-03',},
                      {'id':3,'author':1,'display':1,'rank':1,'name':'?????????3','effectDat':'2021-02-03',},
                      {'id':4,'author':1,'display':1,'rank':4,'name':'?????????4','effectDat':'2021-02-03',}
                      ],
          'monograph': [
                      {'id':1,'author':1,'display':1,'rank':2,'name':'???????????????','dat':'2021-02-03',},
                      {'id':2,'author':1,'display':1,'rank':3,'name':'???????????????','dat':'2021-02-03',},
                      {'id':3,'author':1,'display':1,'rank':1,'name':'???????????????','dat':'2021-02-03',},
                      {'id':4,'author':1,'display':0,'rank':0,'name':'???????????????','dat':'2021-02-03',}
                      ],
          'honor': [
                      {'id':1,'display':1,'rank':11,'title':'????????????'},
                      {'id':2,'display':1,'rank':10,'title':'????????????'},
                      {'id':3,'display':1,'rank':1,'title':'????????????'},
                      {'id':4,'display':1,'rank':13,'title':'????????????'}
                      ],
          'project': [
                      {'id':'1','principal':1,'partRank':1,'display':1,'rank':1,'name':'?????????','level':'???????????????','startTime':'2021-06-07','deadline':'2021-09-07','cost':'11???'},
                      {'id':'2','principal':0,'partRank':3,'display':1,'rank':1,'name':'?????????','level':'???????????????','startTime':'2021-06-07','deadline':'2021-09-07','cost':'11???'},
                      {'id':'3','principal':0,'partRank':2,'display':1,'rank':1,'name':'?????????','level':'???????????????','startTime':'2021-06-07','deadline':'2021-09-07','cost':'11???'},
                      {'id':'4','principal':1,'partRank':1,'display':1,'rank':1,'name':'?????????','level':'???????????????','startTime':'2021-06-07','deadline':'2021-09-07','cost':'11???'},
                      ],
          'competition': [
                      {'id':'1','display':1,'rank':4,'name':'?????????','ranking':'????????????'},
                      {'id':'2','display':1,'rank':3,'name':'?????????','ranking':'????????????'},
                      {'id':'3','display':1,'rank':2,'name':'?????????','ranking':'????????????'},
                      {'id':'4','display':1,'rank':1,'name':'?????????','ranking':'????????????'}
                      ],
          'course': [
                      {'id':1,'display':1,'rank':1,'name':'?????????'},
                      {'id':2,'display':1,'rank':2,'name':'?????????'},
                      {'id':3,'display':1,'rank':3,'name':'?????????'},
                      {'id':4,'display':1,'rank':4,'name':'?????????'},
                      ],
          'others':'<h2>??????????????????????????????</h2>'
    };
    // let { id } = useParams();
    // const { data } = props;
    const info = data['info'];

    const { image, userInfo } = useRouteData()
    
    const conference = data['conference']
    const journal = data['journal']
    const softwareCopyright = data['softwareCopyright']
    const patent = data['patent']
    const monograph = data['monograph']
    const honor = data['honor']
    const project = data['project']
    const competition = data['competition']
    const course = data['course']
    const others = data['others']

    const rows = conference

    const src = Buffer.from(image, "binary");
    return (
        <div className={classes.root}>
            <div className={classes.facultyItemItem}>
              <Card className={classes.card_root}>
                <CardMedia
                  className={classes.cover}
                  image={`data:image/jpg;charset=utf-8;base64,${src}`}
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {info.eng_name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {info.name}
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                    
                  </div>
                </div>
              </Card>
            </div>
            <div className={classes.table_container}>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>id</StyledTableCell>
                    <StyledTableCell align="right">Name</StyledTableCell>
                    <StyledTableCell align="right">Author</StyledTableCell>
                    <StyledTableCell align="right">ConferenceName</StyledTableCell>
                    <StyledTableCell align="right">dat</StyledTableCell>
                    <StyledTableCell align="right">Citation</StyledTableCell>
                    <StyledTableCell align="right">ccf</StyledTableCell>
                    <StyledTableCell align="right">link</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                        {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">{row.author}</StyledTableCell>
                    <StyledTableCell align="right">{row.conferenceName}</StyledTableCell>
                    <StyledTableCell align="right">{row.dat}</StyledTableCell>
                    <StyledTableCell align="right">{row.citation}</StyledTableCell>
                    <StyledTableCell align="right">{row.ccf}</StyledTableCell>
                    <StyledTableCell align="right">{row.link}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
          </div>
        </div>
    )
}

export default User