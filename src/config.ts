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
      return `Logging in user: ${username}`
    },
    logout: () => {
      // Placeholder logout function
      return 'Logging out user'
    },
  },
  dialog: {
    isOpen: false, // Default dialog state (closed)
    content: null, // Default content of the dialog
    openDialog: () => {
      // Placeholder function to open the dialog
      return 'Dialog opened'
    },
    closeDialog: () => {
      // Placeholder function to close the dialog
      return 'Dialog closed'
    },
    setDialogContent: (content: ReactNode) => {
      // Placeholder function to set dialog content
      return 'Dialog content set:' + content
    },
  },
  drawer: {
    isOpen: false, // Default drawer state (closed)
    content: null, // Default content of the drawer
    openDrawer: () => {
      // Placeholder function to open the drawer
      return 'Drawer opened'
    },
    closeDrawer: () => {
      // Placeholder function to close the drawer
      return 'Drawer closed'
    },
    setDrawerContent: (content: ReactNode) => {
      // Placeholder function to set drawer content
      return 'Drawer content set:' + content
    },
  },
}

export default config
