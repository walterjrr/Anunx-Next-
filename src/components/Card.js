import {
    Card as CardMUI,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    CardMedia: {
      paddingTop: '56%',
    }
}));

const Card = ({ image, title, subtitle, actions }) => {
    const classes = useStyles()
    return (
        <CardMUI>
            <CardMedia
                className={classes.CardMedia}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography>
                    {subtitle}
                </Typography>
            </CardContent>
            {
                actions
                    ? (
                        <CardActions>
                            {actions}
                        </CardActions>
                    ): null
            }

        </CardMUI>
    )
}

export default Card