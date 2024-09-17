import React, { ReactElement } from 'react';
import { motion } from "framer-motion"


type Props = {
    element: ReactElement
}


function WrapperPage(props: Props)
{
    let elem = props.element;

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {elem}
        </motion.div>
    )

}


export default WrapperPage;