import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function MythicAddons() {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="description" content="A mod focused on improving parts of the game, to increase productivity" />
                <link rel="icon" href="/favicon.ico" />
                <title>
                    MythicAddons -- TheMythMC
                </title>
            </Head>
            <main>
                <h1 className={styles.title}>
                    MythicAddons
                </h1>
                <p className={styles.description}>
                    A <a href="https://github.com/gnembon/fabric-carpet">fabric-carpet</a> extension focused on optimize certain parts of the game 
                </p>
                <h3>
                    Here you can find a list of available settings
                </h3>
                <ul>
                    <strong>
                    <li>
                        stackableBows -- Allows Bow items to be stacked for easy dispenser crafting
                    </li>
                    <li>
                        stackableShulkerBoxesInPlayerInventories -- If Tweakaroo&apos;s stackable shulker boxes is enable, this will respect that
                    </li>
                    <li>
                        emptyShulkerCeption -- Allows empty shulkerboxes to be placed inside other Shulker boxes
                    </li>
                    <li>
                        commandRegion -- Does some quick math to figure out what region you are in
                    </li>
                    <li>
                        oldFlintAndSteel -- allows you to update observers with F&S
                    </li>
                    <li>
                        editableSigns -- Allows you to edit signs
                    </li>
                    <li>
                        commandCraftingTable -- enables the /craftingtable or the /cf which allows you (if you have a crafting table in your inventory) to open the GUI
                    </li>
                    <li>
                        commandEnderChest -- same as commandCraftingTable, but with an Ender Chest
                    </li>
                    <li>
                        commandUnicorn -- who doesn&apos;t want to be a unicorn?
                    </li>
                    <li>
                        betterStatistics -- stolen right out of the hands from <a href="https://github.com/QuickCarpet/QuickCarpet">Quick Carpet</a>, tracks statistics from the player file
                    </li>
                    <li>
                        shulkerBoxesStackingInHopper -- Lets Shulker Boxes stack in hoppers, so storage systems will fill up easier 
                    </li>
                    </strong>
                </ul>
            </main>
        </div>
    )
}