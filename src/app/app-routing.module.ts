import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApexCardsComponent } from "./components/allCards/apex-cards/apex-cards.component";
import { BattlefieldCardsComponent } from "./components/allCards/battlefield-cards/battlefield-cards.component";
import { EaplayCardsComponent } from "./components/allCards/eaplay-cards/eaplay-cards.component";
import { F1CardsComponent } from "./components/allCards/f1-cards/f1-cards.component";
import { FifaCardsComponent } from "./components/allCards/fifa-cards/fifa-cards.component";
import { InsideCardsComponent } from "./components/allCards/inside-cards/inside-cards.component";
import { NotizieCardsComponent } from "./components/allCards/notizie-cards/notizie-cards.component";
const routes: Routes = [
    {path: "notizieEa", component: NotizieCardsComponent},
    {path: "ea", component: EaplayCardsComponent},
    {path: "fifa", component: FifaCardsComponent},
    {path: "apex", component: ApexCardsComponent},
    {path: "battlefield", component: BattlefieldCardsComponent},
    {path: "f1", component: F1CardsComponent},
    {path: "inside", component: InsideCardsComponent},
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}