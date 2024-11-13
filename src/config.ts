import { ReactNode } from 'react'

// config.js
const config = {
  navigation: {
    mobile: null,
    tablet: null,
    desktop: null,
  },
  auth: {
    isAuthenticated: false, // Default authentication state
    user: null, // Default user is null (no logged-in user)
    login: (username: string) => {
      // Placeholder login function
      console.log(`Logging in user: ${username}`)
    },
    logout: () => {
      // Placeholder logout function
      console.log('Logging out user')
    },
  },
  dialog: {
    isOpen: false, // Default dialog state (closed)
    content: null, // Default content of the dialog
    openDialog: () => {
      // Placeholder function to open the dialog
      console.log('Dialog opened')
    },
    closeDialog: () => {
      // Placeholder function to close the dialog
      console.log('Dialog closed')
    },
    setDialogContent: (content: ReactNode) => {
      // Placeholder function to set dialog content
      console.log('Dialog content set:', content)
    },
  },
  drawer: {
    isOpen: false, // Default drawer state (closed)
    content: null, // Default content of the drawer
    openDrawer: () => {
      // Placeholder function to open the drawer
      console.log('Drawer opened')
    },
    closeDrawer: () => {
      // Placeholder function to close the drawer
      console.log('Drawer closed')
    },
    setDrawerContent: (content: ReactNode) => {
      // Placeholder function to set drawer content
      console.log('Drawer content set:', content)
    },
  },
}

export default config
