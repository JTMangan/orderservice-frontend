/*
    Helper code for customerservice frontend and backend for c322 can be found at https://github.com/c322-spring-2023
    This  code was written by Professor Hamidreza Bahramian at Indiana University
*/

import styles from "@/styles/about.module.css";

const about = () => {

    return(
        <>
            <div className={styles.pageContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.pageTitle} >
                        About
                    </h1>
                    <p className={styles.aboutText}>
                        This is the Order Service app written by Jonathon Mangan with instruction and helper code from
                        professor Hamidreza Bahramian at Indiana University. In this app, we build a full-stack app which allows you to make
                        orders. These orders once created are then displayed to the user for them to be able to see.
                    </p>

                    <a href="https://github.com/c322-spring-2023" target="_blank" className={styles.linkText}>
                        The code that professor Hamidreza Bahramian wrote for this tutorial can be found at this link.
                    </a>
                </div>
            </div>
        </>
    )
}

export default about;