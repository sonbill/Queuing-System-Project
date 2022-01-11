import React, { useState } from 'react'
import clsx from 'clsx'
//DRAWER

import { ListItem, Icon, ListItemIcon, ListItemText } from '@mui/material/';

//CSS
import { useStyles } from '../../styles'
// import './style.css';


const MenuItem = ({ label, icon }) => {
    // const [toggled, setToggled] = useState(false)

    // const handleActive = () => {

    //     toggled ? setToggled(false) : setToggled(true)

    // }

    const [active, setActive] = useState(true)
    const classes = useStyles()
    return (
        <ListItem className={clsx(classes.activeClass, active && classes.ListItems)}>
            <ListItemIcon >
                <Icon className={clsx(active && classes.ListItems)}>
                    {icon}
                </Icon>
            </ListItemIcon >
            <ListItemText primary={label} primaryTypographyProps={{ variant: "body2" }} />
        </ListItem >
    )
}
export default MenuItem
