import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  template: '<tree-root [nodes]="nodes" [options]="options"></tree-root>'
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  nodes = [
    {
      id: "1",
      name: "DHA",
      objectType: "U",
      children: [
        {
          id: "5",
          name: "Air Force",
          objectType: "U",
          children: [
            {
              id: "1",
              name: "Call All",
              objectType: "F"
            }
          ]
        },
        {
          id: "2",
          name: "Army",
          objectType: "U"
        },
        {
          id: "4",
          name: "Joint Base",
          objectType: "U"
        },
        {
          id: "3",
          name: "Navy",
          objectType: "U"
        }
      ]
    }
  ];
  options = {};
}
