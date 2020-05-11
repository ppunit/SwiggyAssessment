import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();
    const srcArray = ["https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=60"]
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.RestDetail.name}
                    height="140"
                    image={srcArray[Math.floor(Math.random() * srcArray.length)]}
                    title={props.RestDetail.name}
                />
                <CardContent>
                    <Typography  variant="subtitle2" component="h6">
                        {props.RestDetail.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.RestDetail.food_types[0]}
                    </Typography>
                    <Typography>
                        <span className="_3Mn31">
                            <span className="_9uwBC wY0my">
                                <span className="icon-star _537e4"></span>
                                <span>{props.RestDetail.ratings}</span>
                            </span>
                            <span>•</span>
                            <span>{props.RestDetail.delivery_time}</span>
                            <span>•</span>
                            <span className="nVWSi">₹{props.RestDetail.price_for_two} FOR TWO`</span>
                        </span>
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
}