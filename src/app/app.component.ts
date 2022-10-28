import { Component, OnInit } from '@angular/core';
import { IBLocItem } from './components/bloc-viewer/model/bloc-viewer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bloc-viewer';

  public blocs: IBLocItem[] = [];

  public data = [
    {
      id: 'test1',
      title: 'test1',
      content: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit'

    },
    {
      id: 'test22',
      title: 'test2',
      content: 'orem ipsum dolor sit amet'

    },
    {
      id: 'test222',
      title: 'test2',
      content: 'orem ipsum dolor sit amet'

    },
    {
      id: 'test2',
      title: 'test2',
      content: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit'

    },
    {
      id: 'test3',
      title: 'test3',
      content: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit'

    },
    {
      id: 'test4',
      title: 'test4',
      content: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit'

    },
    {
      id: 'test5',
      title: 'test5',
      content: `orem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
      adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
      Maecenas ligula massa, varius a, semper congue, euismod non, mi.
      Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
      Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
      Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
      Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.
      Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit

      orem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
      adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
      Maecenas ligula massa, varius a, semper congue, euismod non, mi.
      Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
      Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
      Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
      Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.
      Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit
      `

    },
    {
      id: 'test6',
      title: 'test6',
      content: `very small content`

    },
    {
      id: 'test7',
      title: 'test7',
      content: ``

    },
    {
      id: 'test8',
      title: 'test8',
      content: ``

    },
    {
      id: 'test9',
      title: 'test9',
      content: ``

    },
    {
      id: 'test10',
      title: 'test10',
      content: ``

    },
    {
      id: 'test11',
      title: 'test11',
      content: `orem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
      adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
      Maecenas ligula massa, varius a, semper congue, euismod non, mi.
      Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
      Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.`

    }
  ];

  ngOnInit() {
    this.blocs = this.generateBlocs();
  }

  private generateBlocs(): IBLocItem[] {
    return this.data.map(item => {
      return {
        dataId: item.id,
        template: null
      };
    });
  }
}
