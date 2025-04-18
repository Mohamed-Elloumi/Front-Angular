import { Component } from '@angular/core';
import { EventService } from 'src/Services/evenement.service';
import { MemberService } from 'src/Services/member.service';
import { PubService } from 'src/Services/pub.service';
import { ChartOptions, ChartDataset } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nb_Members: number = 0;
  nb_Articles: number = 0;
  nb_Events: number = 0;
  nb_Tools: number = 0;
  nb_Students: number = 0;
  nb_Teachers: number = 0;
  chartDatapie: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions',
      data: [ 1551, 1688, 1800, 1895, 2124, 2124 ]
    }
  ];
  chartLabelspie: string[] = ['A','B','C','D','E','F'];
  chartOptions: ChartOptions = {};

  // other code
  constructor(private MS: MemberService, private ES: EventService, private pb: PubService) { }

  ngOnInit(): void {
    this.MS.GetAllMembers().subscribe(
      (res: any) => {
        if (res) {
          this.nb_Members = res.length;
          for(let i=0;i<this.nb_Members;i++){
            if(res[i].type=="student"){
              this.nb_Students++;
            }else if(res[i].type=="teacher"){
              this.nb_Teachers++;
            }
          }
          this.chartDatapie = [
            {
              data: [this.nb_Students, this.nb_Teachers],
            }
          ];
    
        }
      }
    );

    this.ES.GetAllEvents().subscribe(
      (data: any) => {
        if (data) {
          this.nb_Events = data.length;
        }
      }
    );

    this.pb.GetAllPubs().subscribe(
      (data: any) => {
        if (data) {
          this.nb_Articles = data.length;
        }
      }
    );
  }

}
