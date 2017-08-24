const {app, Menu, Tray} = require('electron')

let tray = null
app.on('ready', () => {
  tray = new Tray('tray_icon_black.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
    {label: 'Item2', type: 'radio'},
    {label: 'Item3', type: 'radio', checked: true},
    {label: 'Item4', type: 'radio', 'click': function () {
      console.log('clicked the button')
      tray.setImage('tray_icon_purple.png')
    }},
    {role: 'quit'}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})
