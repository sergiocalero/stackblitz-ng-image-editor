import { Component, OnInit } from '@angular/core';

import ImageEditor from 'tui-image-editor';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  defaultTheme: any;

  ngOnInit() {
    this.setDefaultTheme();
  }
  loadImageEditor() {
    const instance = new ImageEditor(document.querySelector('#tui-image-editor-container'), {
      includeUI: {
          theme: this.defaultTheme
          // menu: ['shape', 'crop', 'filter'],
          // initMenu: 'filter',
          /*
          uiSize: {
            width: '700px',
            height: '600px'
          }
          */
      },
      cssMaxWidth: 700,
      cssMaxHeight: 500,
      usageStatistics: false
    });
  }

  setDefaultTheme() {
    this.defaultTheme = {
      'common.bi.image': 'https://uicdn.toast.com/toastui/img/tui-image-editor-bi.png',
      'common.bisize.width': '251px',
      'common.bisize.height': '21px',
      'common.backgroundImage': 'none',
      'common.backgroundColor': '#1e1e1e',
      'common.border': '0px',

      // header
      'header.backgroundImage': 'none',
      'header.backgroundColor': 'transparent',
      'header.border': '0px',

      // load button
      'loadButton.backgroundColor': '#fff',
      'loadButton.border': '1px solid #ddd',
      'loadButton.color': '#222',
      'loadButton.fontFamily': '\'Noto Sans\', sans-serif',
      'loadButton.fontSize': '12px',

      // download button
      'downloadButton.backgroundColor': '#fdba3b',
      'downloadButton.border': '1px solid #fdba3b',
      'downloadButton.color': '#fff',
      'downloadButton.fontFamily': '\'Noto Sans\', sans-serif',
      'downloadButton.fontSize': '12px',

      // main icons
      'menu.normalIcon.path': 'assets/svg/icon-d.svg',
      'menu.normalIcon.name': 'icon-d',
      'menu.activeIcon.path': 'assets/svg/icon-b.svg',
      'menu.activeIcon.name': 'icon-b',
      'menu.disabledIcon.path': 'assets/svg/icon-a.svg',
      'menu.disabledIcon.name': 'icon-a',
      'menu.hoverIcon.path': 'assets/svg/icon-c.svg',
      'menu.hoverIcon.name': 'icon-c',
      'menu.iconSize.width': '24px',
      'menu.iconSize.height': '24px',

      // submenu primary color
      'submenu.backgroundColor': '#1e1e1e',
      'submenu.partition.color': '#3c3c3c',

      // submenu icons
      'submenu.normalIcon.path': '/assets/svg/icon-d.svg',
      'submenu.normalIcon.name': 'icon-d',
      'submenu.activeIcon.path': '/assets/svg/icon-c.svg',
      'submenu.activeIcon.name': 'icon-c',
      'submenu.iconSize.width': '32px',
      'submenu.iconSize.height': '32px',

      // submenu labels
      'submenu.normalLabel.color': '#8a8a8a',
      'submenu.normalLabel.fontWeight': 'lighter',
      'submenu.activeLabel.color': '#fff',
      'submenu.activeLabel.fontWeight': 'lighter',

      // checkbox style
      'checkbox.border': '0px',
      'checkbox.backgroundColor': '#fff',

      // range style
      'range.pointer.color': '#fff',
      'range.bar.color': '#666',
      'range.subbar.color': '#d1d1d1',

      'range.disabledPointer.color': '#414141',
      'range.disabledBar.color': '#282828',
      'range.disabledSubbar.color': '#414141',

      'range.value.color': '#fff',
      'range.value.fontWeight': 'lighter',
      'range.value.fontSize': '11px',
      'range.value.border': '1px solid #353535',
      'range.value.backgroundColor': '#151515',
      'range.title.color': '#fff',
      'range.title.fontWeight': 'lighter',

      // colorpicker style
      'colorpicker.button.border': '1px solid #1e1e1e',
      'colorpicker.title.color': '#fff'
    };

  }  
}
