import styles from "../ui/dashboard/dashboard.module.css"


const Layout = ({
    children,
 }: {
    children: React.ReactNode
  }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        {/* <Sidebar/> */}
      </div>
      <div className={styles.content}>
        {/* <Navbar/> */}
        {children}
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default Layout