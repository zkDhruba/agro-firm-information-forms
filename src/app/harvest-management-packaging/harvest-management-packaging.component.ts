import { Component } from '@angular/core';

@Component({
  selector: 'app-harvest-management-packaging',
  templateUrl: './harvest-management-packaging.component.html',
  styleUrls: ['./harvest-management-packaging.component.css']
})
export class HarvestManagementPackagingComponent {


  onSubmitCropsHaresting(HMPData: any){

    let centerPackaging: object = {
      transportationType: HMPData.transportationType,
      isInspection: HMPData.isInspection,
      isWashingRoom: HMPData.isWashingRoom,
      isDryByFan: HMPData.isDryByFan,
      isFinalFacilites: HMPData.isFinalFacilites,
      isTamperatureControl: HMPData.isTamperatureControl,
      isBacterialContainment: HMPData.isBacterialContainment,
      isHygienicPractices: HMPData.isHygienicPractices,
      isHygienicIsolatedRoom: HMPData.isHygienicIsolatedRoom,
      isHygienicArrivalExit: HMPData.isHygienicArrivalExit
    }

    let temperatureControl: object = {
      isAppropriateTemperature: HMPData.isAppropriateTemperature,
      vegetables: HMPData.vegetables,
      betelLeaf: HMPData.betelLeaf,
      mango: HMPData.mango
    }

    let vegetables: object = {
      isCleaningMethod: HMPData.isCleaningMethod,
      isColdWaterTreatment: HMPData.isColdWaterTreatment,
      isChlorineted: HMPData.isChlorineted
    }

    let betelLeaf: object = {
      isCleaningMethod: HMPData.isCleaningMethodBetel,
      isChlorineted: HMPData.isChlorinetedBetel,
      washedWith: HMPData.washedWith,
      treatedTime: HMPData.treatedTime,
      isWashDistilledWater: HMPData.isWashDistilledWater,
      isDryUnderFan: HMPData.isDryUnderFan
    }

    let mango: object = {
      isBagging: HMPData.isBagging,
      baggingType: HMPData.baggingType,
      isBoiledWaterCleaning: HMPData.isBoiledWaterCleaning,
      treatedTemperature: HMPData.treatedTemperature,
      isWashDistilledWater: HMPData.isWashDistilledWater,
      isDryUnderFan: HMPData.isDryUnderFanMango
    }

    let inspection: object = {
      isInspectionByOfficer: HMPData.isInspectionByOfficer,
      isNoInsect: HMPData.isNoInsect,
      isCertified: HMPData.isCertified,
      certificateDate: HMPData.certificateDate
    }

    let finalPackaging: object = {
      packagingType: HMPData.packagingType,
      consumerDemandPackaging: HMPData.consumerDemandPackaging,
      isMicrobialTest: HMPData.isMicrobialTest,
      packagingMaterial: HMPData.packagingMaterial,
      isPaperWrapped: HMPData.isPaperWrapped,
      isVentilation: HMPData.isVentilation,
      isDryIceUsed: HMPData.isDryIceUsed,
      isDistilledMade: HMPData.isDistilledMade,
      storedTime: HMPData.storedTime,
      vanType: HMPData.vanType,
      routeType: HMPData.routeType,
      isTemperatureControlRoom: HMPData.isTemperatureControlRoom,
      isPhytoSanitaryCertificate: HMPData.isPhytoSanitaryCertificate,
      isLebeling: HMPData.isLebeling,
      exportedCountry: HMPData.exportedCountry,
      exporterName: HMPData.exporterName,
      exportedDate: HMPData.exportedDate,
      importerName: HMPData.importerName,
      isRejected: HMPData.isRejected,
      rejectedReason: HMPData.rejectedReason
    }

    let HMPAllData: object = {
      centerPackaging,
      temperatureControl,
      vegetables,
      betelLeaf,
      mango,
      inspection
    }

    console.log(HMPData);
    console.log(HMPAllData);
    
  }

}
