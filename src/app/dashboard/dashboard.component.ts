import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { EventService } from 'src/Services/evenement.service';
import { MemberService } from 'src/Services/member.service';
import { PubService } from 'src/Services/pub.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Nb_Members = 0;
  Nb_Events = 0;
  Nb_Pubs = 0;
  Nb_Articles = 0;
  Nb_Tools = 0; // (Optionnel)
  Nb_Students = 0;
  Nb_Teachers = 0;
nbTunis = 0; // Ajouté pour Tunis
  nbSousse = 0;
  nbGabes = 0;
  nbMahdia = 0;

  chartLabels: string[] = [];
  chartData: ChartDataset<'line'>[] = [];

  chartLabelspie: string[] = ["Teachers", "Students"];
  chartDatapie: ChartDataset<'pie'>[] = [
    {
      label: 'Member Types',
      data: [0, 0],
      backgroundColor: ['#36A2EB', '#FF6384']
    }
  ];
  chartLabelsbar: string[] = ["Article", "journal"];
  chartDatabar: ChartDataset<'bar'>[] = [
    {
      label: 'Member Types',
      data: [0, 0],
      backgroundColor: ['#36A2EB', '#FF6384']
    }
  ];

  chartLabelsdoughnut: string[] = ["Sousse", "Gabes", "Mahdia"];
  chartDatadoughnut: ChartDataset<'doughnut'>[] = [
    {
      label: 'Events per Location',
      data: [],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ];

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  };

  nameLabels: string[] = [];

  constructor(private MS: MemberService, private ES: EventService, private pb: PubService) { }

  ngOnInit(): void {
    this.loadMembers();
    this.loadEvents();
    this.loadPublications();
  }

  loadMembers(): void {
    this.MS.GetAllMembers().subscribe(members => {
      this.Nb_Members = members.length;
      const membersData: number[] = [];
  
      members.forEach(member => {
        if (member.type === 'Student') {
          this.Nb_Students++;
        } else if (member.type === 'Teacher') {
          this.Nb_Teachers++;
        }
  
        this.nameLabels.push(member.name);
  
        // ✅ Récupérer vraiment le nombre d'événements par membre
        const numberOfEvents = member.tabEvent ? member.tabEvent.length : 0;
        membersData.push(numberOfEvents);
      });
  
      // Mettre à jour les données du pie chart
      this.chartDatapie[0].data = [this.Nb_Teachers, this.Nb_Students];
  
      // ✅ Mettre à jour correctement les données du Line chart
      this.chartLabels = this.nameLabels;
      this.chartData = [
        {
          label: 'Members Activity',
          data: membersData,
          fill: false,
          borderColor: 'blue',
          tension: 0.4
        }
      ];
    });
  }
  
  
  loadEvents(): void {
    this.ES.GetAllEvents().subscribe(events => {
      this.Nb_Events = events.length;
      events.forEach(event => {
        const lieu = event.lieu?.toLowerCase().trim(); // On nettoie bien
        if (lieu === 'sousse') {
          this.nbSousse++;
        } else if (lieu === 'gabes') {
          this.nbGabes++;
        } else if (lieu === 'mahdia') {
          this.nbMahdia++;
        } else if (lieu === 'tunis') {   // ➔ Ajouté
          this.nbTunis++;
        }
      });
  
      // Important: changer ton graphique pour inclure Tunis aussi
      this.chartLabelsdoughnut = ['Sousse', 'Gabes', 'Mahdia', 'Tunis'];
      this.chartDatadoughnut = [
        {
          label: 'Events per Location',
          data: [this.nbSousse, this.nbGabes, this.nbMahdia, this.nbTunis],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }
      ];
    });
  }
  

  loadPublications(): void {
    this.pb.GetAllPubs().subscribe(publications => {
      this.Nb_Articles = publications.length;
  
      // Compter les types
      let nbArticle = 0;
      let nbJournal = 0;

      publications.forEach(pub => {
        if (pub.type?.toLowerCase() === 'article') {
          nbArticle++;
        }
        else if (pub.type?.toLowerCase() === 'journal') {
          nbJournal++;
        }
      });
  
      // Mettre à jour les données du bar chart
      this.chartLabelsbar = ['Article', 'Journal']; // Remis ici pour être sûr
      this.chartDatabar = [
        {
          label: 'Publications Types',
          data: [nbArticle, nbJournal], // Ajouté pour le livre
          backgroundColor: ['#36A2EB', '#FF6384'] // Ajouté pour le livre
        }
      ];
    });
  }
  
}