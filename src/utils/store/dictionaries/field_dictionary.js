const fieldInfoArr = {
  ABS: {
    "ABS.1": {
      name: "Discharge Care Provider",
      required: "O",
      repeat: "1",
    },
    "ABS.2": {
      name: "Transfer Medical Service Code",
      required: "O",
      repeat: "1",
    },
    "ABS.3": {
      name: "Severity of Illness Code",
      required: "O",
      repeat: "1",
    },
    "ABS.4": {
      name: "Date/Time of Attestation",
      required: "O",
      repeat: "1",
    },
    "ABS.5": {
      name: "Attested By",
      required: "O",
      repeat: "1",
    },
    "ABS.6": {
      name: "Triage Code",
      required: "O",
      repeat: "1",
    },
    "ABS.7": {
      name: "Abstract Completion Date/Time",
      required: "O",
      repeat: "1",
    },
    "ABS.8": {
      name: "Abstracted By",
      required: "O",
      repeat: "1",
    },
    "ABS.9": {
      name: "Case Category Code",
      required: "O",
      repeat: "1",
    },
    "ABS.10": {
      name: "Caesarian Section Indicator",
      required: "O",
      repeat: "1",
    },
    "ABS.11": {
      name: "Gestation Category Code",
      required: "O",
      repeat: "1",
    },
    "ABS.12": {
      name: "Gestation Period - Weeks",
      required: "O",
      repeat: "1",
    },
    "ABS.13": {
      name: "Newborn Code",
      required: "O",
      repeat: "1",
    },
    "ABS.14": {
      name: "Stillborn Indicator",
      required: "O",
      repeat: "1",
    },
  },
  ACC: {
    "ACC.1": {
      name: "Accident Date/Time",
      required: "O",
      repeat: "1",
    },
    "ACC.2": {
      name: "Accident Code",
      required: "O",
      repeat: "1",
    },
    "ACC.3": {
      name: "Accident Location",
      required: "O",
      repeat: "1",
    },
    "ACC.4": {
      name: "Auto Accident State",
      required: "B",
      repeat: "1",
    },
    "ACC.5": {
      name: "Accident Job Related Indicator",
      required: "O",
      repeat: "1",
    },
    "ACC.6": {
      name: "Accident Death Indicator",
      required: "O",
      repeat: "1",
    },
    "ACC.7": {
      name: "Entered By",
      required: "O",
      repeat: "1",
    },
    "ACC.8": {
      name: "Accident Description",
      required: "O",
      repeat: "1",
    },
    "ACC.9": {
      name: "Brought In By",
      required: "O",
      repeat: "1",
    },
    "ACC.10": {
      name: "Police Notified Indicator",
      required: "O",
      repeat: "1",
    },
    "ACC.11": {
      name: "Accident Address",
      required: "O",
      repeat: "1",
    },
  },
  ADD: {
    "ADD.1": {
      name: "Addendum Continuation Pointer",
      required: "O",
      repeat: "1",
    },
  },
  AFF: {
    "AFF.1": {
      name: "Set ID - AFF",
      required: "R",
      repeat: "1",
    },
    "AFF.2": {
      name: "Professional Organization",
      required: "R",
      repeat: "1",
    },
    "AFF.3": {
      name: "Professional Organization Address",
      required: "O",
      repeat: "1",
    },
    "AFF.4": {
      name: "Professional Organization Affiliation Date Range",
      required: "O",
      repeat: "∞",
    },
    "AFF.5": {
      name: "Professional Affiliation Additional Information",
      required: "O",
      repeat: "1",
    },
  },
  AIG: {
    "AIG.1": {
      name: "Set ID - AIG",
      required: "R",
      repeat: "1",
    },
    "AIG.2": {
      name: "Segment Action Code",
      required: "C",
      repeat: "1",
    },
    "AIG.3": {
      name: "Resource ID",
      required: "C",
      repeat: "1",
    },
    "AIG.4": {
      name: "Resource Type",
      required: "R",
      repeat: "1",
    },
    "AIG.5": {
      name: "Resource Group",
      required: "O",
      repeat: "∞",
    },
    "AIG.6": {
      name: "Resource Quantity",
      required: "O",
      repeat: "1",
    },
    "AIG.7": {
      name: "Resource Quantity Units",
      required: "O",
      repeat: "1",
    },
    "AIG.8": {
      name: "Start Date/Time",
      required: "C",
      repeat: "1",
    },
    "AIG.9": {
      name: "Start Date/Time Offset",
      required: "C",
      repeat: "1",
    },
    "AIG.10": {
      name: "Start Date/Time Offset Units",
      required: "C",
      repeat: "1",
    },
    "AIG.11": {
      name: "Duration",
      required: "O",
      repeat: "1",
    },
    "AIG.12": {
      name: "Duration Units",
      required: "O",
      repeat: "1",
    },
    "AIG.13": {
      name: "Allow Substitution Code",
      required: "C",
      repeat: "1",
    },
    "AIG.14": {
      name: "Filler Status Code",
      required: "C",
      repeat: "1",
    },
  },
  AIL: {
    "AIL.1": {
      name: "Set ID - AIL",
      required: "R",
      repeat: "1",
    },
    "AIL.2": {
      name: "Segment Action Code",
      required: "C",
      repeat: "1",
    },
    "AIL.3": {
      name: "Location Resource ID",
      required: "C",
      repeat: "∞",
    },
    "AIL.4": {
      name: "Location Type-AIL",
      required: "C",
      repeat: "1",
    },
    "AIL.5": {
      name: "Location Group",
      required: "O",
      repeat: "1",
    },
    "AIL.6": {
      name: "Start Date/Time",
      required: "C",
      repeat: "1",
    },
    "AIL.7": {
      name: "Start Date/Time Offset",
      required: "C",
      repeat: "1",
    },
    "AIL.8": {
      name: "Start Date/Time Offset Units",
      required: "C",
      repeat: "1",
    },
    "AIL.9": {
      name: "Duration",
      required: "O",
      repeat: "1",
    },
    "AIL.10": {
      name: "Duration Units",
      required: "O",
      repeat: "1",
    },
    "AIL.11": {
      name: "Allow Substitution Code",
      required: "C",
      repeat: "1",
    },
    "AIL.12": {
      name: "Filler Status Code",
      required: "C",
      repeat: "1",
    },
  },
  AIP: {
    "AIP.1": {
      name: "Set ID - AIP",
      required: "R",
      repeat: "1",
    },
    "AIP.2": {
      name: "Segment Action Code",
      required: "C",
      repeat: "1",
    },
    "AIP.3": {
      name: "Personnel Resource ID",
      required: "C",
      repeat: "∞",
    },
    "AIP.4": {
      name: "Resource Type",
      required: "C",
      repeat: "1",
    },
    "AIP.5": {
      name: "Resource Group",
      required: "O",
      repeat: "1",
    },
    "AIP.6": {
      name: "Start Date/Time",
      required: "C",
      repeat: "1",
    },
    "AIP.7": {
      name: "Start Date/Time Offset",
      required: "C",
      repeat: "1",
    },
    "AIP.8": {
      name: "Start Date/Time Offset Units",
      required: "C",
      repeat: "1",
    },
    "AIP.9": {
      name: "Duration",
      required: "O",
      repeat: "1",
    },
    "AIP.10": {
      name: "Duration Units",
      required: "O",
      repeat: "1",
    },
    "AIP.11": {
      name: "Allow Substitution Code",
      required: "C",
      repeat: "1",
    },
    "AIP.12": {
      name: "Filler Status Code",
      required: "C",
      repeat: "1",
    },
  },
  AIS: {
    "AIS.1": {
      name: "Set ID - AIS",
      required: "R",
      repeat: "1",
    },
    "AIS.2": {
      name: "Segment Action Code",
      required: "C",
      repeat: "1",
    },
    "AIS.3": {
      name: "Universal Service Identifier",
      required: "R",
      repeat: "1",
    },
    "AIS.4": {
      name: "Start Date/Time",
      required: "C",
      repeat: "1",
    },
    "AIS.5": {
      name: "Start Date/Time Offset",
      required: "C",
      repeat: "1",
    },
    "AIS.6": {
      name: "Start Date/Time Offset Units",
      required: "C",
      repeat: "1",
    },
    "AIS.7": {
      name: "Duration",
      required: "O",
      repeat: "1",
    },
    "AIS.8": {
      name: "Duration Units",
      required: "O",
      repeat: "1",
    },
    "AIS.9": {
      name: "Allow Substitution Code",
      required: "C",
      repeat: "1",
    },
    "AIS.10": {
      name: "Filler Status Code",
      required: "C",
      repeat: "1",
    },
    "AIS.11": {
      name: "Placer Supplemental Service Information",
      required: "O",
      repeat: "∞",
    },
    "AIS.12": {
      name: "Filler Supplemental Service Information",
      required: "O",
      repeat: "∞",
    },
  },
  AL1: {
    "AL1.1": {
      name: "Set ID - AL1",
      required: "R",
      repeat: "1",
    },
    "AL1.2": {
      name: "Allergen Type Code",
      required: "O",
      repeat: "1",
    },
    "AL1.3": {
      name: "Allergen Code/Mnemonic/Description",
      required: "R",
      repeat: "1",
    },
    "AL1.4": {
      name: "Allergy Severity Code",
      required: "O",
      repeat: "1",
    },
    "AL1.5": {
      name: "Allergy Reaction Code",
      required: "O",
      repeat: "∞",
    },
    "AL1.6": {
      name: "Identification Date",
      required: "B",
      repeat: "1",
    },
  },
  APR: {
    "APR.1": {
      name: "Time Selection Criteria",
      required: "O",
      repeat: "∞",
    },
    "APR.2": {
      name: "Resource Selection Criteria",
      required: "O",
      repeat: "∞",
    },
    "APR.3": {
      name: "Location Selection Criteria",
      required: "O",
      repeat: "∞",
    },
    "APR.4": {
      name: "Slot Spacing Criteria",
      required: "O",
      repeat: "1",
    },
    "APR.5": {
      name: "Filler Override Criteria",
      required: "O",
      repeat: "∞",
    },
  },
  ARQ: {
    "ARQ.1": {
      name: "Placer Appointment ID",
      required: "R",
      repeat: "1",
    },
    "ARQ.2": {
      name: "Filler Appointment ID",
      required: "C",
      repeat: "1",
    },
    "ARQ.3": {
      name: "Occurrence Number",
      required: "C",
      repeat: "1",
    },
    "ARQ.4": {
      name: "Placer Group Number",
      required: "O",
      repeat: "1",
    },
    "ARQ.5": {
      name: "Schedule ID",
      required: "O",
      repeat: "1",
    },
    "ARQ.6": {
      name: "Request Event Reason",
      required: "O",
      repeat: "1",
    },
    "ARQ.7": {
      name: "Appointment Reason",
      required: "O",
      repeat: "1",
    },
    "ARQ.8": {
      name: "Appointment Type",
      required: "O",
      repeat: "1",
    },
    "ARQ.9": {
      name: "Appointment Duration",
      required: "O",
      repeat: "1",
    },
    "ARQ.10": {
      name: "Appointment Duration Units",
      required: "O",
      repeat: "1",
    },
    "ARQ.11": {
      name: "Requested Start Date/Time Range",
      required: "O",
      repeat: "∞",
    },
    "ARQ.12": {
      name: "Priority-ARQ",
      required: "O",
      repeat: "1",
    },
    "ARQ.13": {
      name: "Repeating Interval",
      required: "O",
      repeat: "1",
    },
    "ARQ.14": {
      name: "Repeating Interval Duration",
      required: "O",
      repeat: "1",
    },
    "ARQ.15": {
      name: "Placer Contact Person",
      required: "R",
      repeat: "∞",
    },
    "ARQ.16": {
      name: "Placer Contact Phone Number",
      required: "O",
      repeat: "∞",
    },
    "ARQ.17": {
      name: "Placer Contact Address",
      required: "O",
      repeat: "∞",
    },
    "ARQ.18": {
      name: "Placer Contact Location",
      required: "O",
      repeat: "1",
    },
    "ARQ.19": {
      name: "Entered By Person",
      required: "R",
      repeat: "∞",
    },
    "ARQ.20": {
      name: "Entered By Phone Number",
      required: "O",
      repeat: "∞",
    },
    "ARQ.21": {
      name: "Entered By Location",
      required: "O",
      repeat: "1",
    },
    "ARQ.22": {
      name: "Parent Placer Appointment ID",
      required: "O",
      repeat: "1",
    },
    "ARQ.23": {
      name: "Parent Filler Appointment ID",
      required: "O",
      repeat: "1",
    },
    "ARQ.24": {
      name: "Placer Order Number",
      required: "C",
      repeat: "∞",
    },
    "ARQ.25": {
      name: "Filler Order Number",
      required: "C",
      repeat: "∞",
    },
  },
  AUT: {
    "AUT.1": {
      name: "Authorizing Payor, Plan ID",
      required: "O",
      repeat: "1",
    },
    "AUT.2": {
      name: "Authorizing Payor, Company ID",
      required: "R",
      repeat: "1",
    },
    "AUT.3": {
      name: "Authorizing Payor, Company Name",
      required: "O",
      repeat: "1",
    },
    "AUT.4": {
      name: "Authorization Effective Date",
      required: "O",
      repeat: "1",
    },
    "AUT.5": {
      name: "Authorization Expiration Date",
      required: "O",
      repeat: "1",
    },
    "AUT.6": {
      name: "Authorization Identifier",
      required: "C",
      repeat: "1",
    },
    "AUT.7": {
      name: "Reimbursement Limit",
      required: "O",
      repeat: "1",
    },
    "AUT.8": {
      name: "Requested Number of Treatments",
      required: "O",
      repeat: "1",
    },
    "AUT.9": {
      name: "Authorized Number of Treatments",
      required: "O",
      repeat: "1",
    },
    "AUT.10": {
      name: "Process Date",
      required: "O",
      repeat: "1",
    },
  },
  BHS: {
    "BHS.1": {
      name: "Batch Field Separator",
      required: "R",
      repeat: "1",
    },
    "BHS.2": {
      name: "Batch Encoding Characters",
      required: "R",
      repeat: "1",
    },
    "BHS.3": {
      name: "Batch Sending Application",
      required: "O",
      repeat: "1",
    },
    "BHS.4": {
      name: "Batch Sending Facility",
      required: "O",
      repeat: "1",
    },
    "BHS.5": {
      name: "Batch Receiving Application",
      required: "O",
      repeat: "1",
    },
    "BHS.6": {
      name: "Batch Receiving Facility ",
      required: "O",
      repeat: "1",
    },
    "BHS.7": {
      name: "Batch Creation Date/Time",
      required: "O",
      repeat: "1",
    },
    "BHS.8": {
      name: "Batch Security",
      required: "O",
      repeat: "1",
    },
    "BHS.9": {
      name: "Batch Name/ID/Type",
      required: "O",
      repeat: "1",
    },
    "BHS.10": {
      name: "Batch Comment",
      required: "O",
      repeat: "1",
    },
    "BHS.11": {
      name: "Batch Control ID",
      required: "O",
      repeat: "1",
    },
    "BHS.12": {
      name: "Reference Batch Control ID",
      required: "O",
      repeat: "1",
    },
  },
  BLC: {
    "BLC.1": {
      name: "Blood Product Code",
      required: "O",
      repeat: "1",
    },
    "BLC.2": {
      name: "Blood Amount",
      required: "O",
      repeat: "1",
    },
  },
  BLG: {
    "BLG.1": {
      name: "When to Charge",
      required: "O",
      repeat: "1",
    },
    "BLG.2": {
      name: "Charge Type",
      required: "O",
      repeat: "1",
    },
    "BLG.3": {
      name: "Account ID",
      required: "O",
      repeat: "1",
    },
    "BLG.4": {
      name: "Charge Type Reason",
      required: "O",
      repeat: "1",
    },
  },
  BPO: {
    "BPO.1": {
      name: "Set ID - BPO",
      required: "R",
      repeat: "1",
    },
    "BPO.2": {
      name: "BP Universal Service ID",
      required: "R",
      repeat: "1",
    },
    "BPO.3": {
      name: "BP  Processing Requirements",
      required: "O",
      repeat: "∞",
    },
    "BPO.4": {
      name: "BP Quantity",
      required: "R",
      repeat: "1",
    },
    "BPO.5": {
      name: "BP Amount",
      required: "O",
      repeat: "1",
    },
    "BPO.6": {
      name: "BP Units",
      required: "O",
      repeat: "1",
    },
    "BPO.7": {
      name: "BP Intended Use Date/Time",
      required: "O",
      repeat: "1",
    },
    "BPO.8": {
      name: "BP Intended Dispense From Location",
      required: "O",
      repeat: "1",
    },
    "BPO.9": {
      name: "BP Intended Dispense From Address",
      required: "O",
      repeat: "1",
    },
    "BPO.10": {
      name: "BP Requested Dispense Date/Time",
      required: "O",
      repeat: "1",
    },
    "BPO.11": {
      name: "BP Requested Dispense To Location",
      required: "O",
      repeat: "1",
    },
    "BPO.12": {
      name: "BP Requested Dispense To Address",
      required: "O",
      repeat: "1",
    },
    "BPO.13": {
      name: "BP Indication for Use",
      required: "O",
      repeat: "∞",
    },
    "BPO.14": {
      name: "BP Informed Consent Indicator",
      required: "O",
      repeat: "1",
    },
  },
  BPX: {
    "BPX.1": {
      name: "Set ID - BPX",
      required: "R",
      repeat: "1",
    },
    "BPX.2": {
      name: "BP Dispense Status",
      required: "R",
      repeat: "1",
    },
    "BPX.3": {
      name: "BP Status",
      required: "R",
      repeat: "1",
    },
    "BPX.4": {
      name: "BP Date/Time of Status",
      required: "R",
      repeat: "1",
    },
    "BPX.5": {
      name: "BC Donation ID",
      required: "C",
      repeat: "1",
    },
    "BPX.6": {
      name: "BC Component",
      required: "C",
      repeat: "1",
    },
    "BPX.7": {
      name: "BC Donation Type / Intended Use",
      required: "O",
      repeat: "1",
    },
    "BPX.8": {
      name: "CP Commercial Product",
      required: "C",
      repeat: "1",
    },
    "BPX.9": {
      name: "CP Manufacturer",
      required: "C",
      repeat: "1",
    },
    "BPX.10": {
      name: "CP Lot Number",
      required: "C",
      repeat: "1",
    },
    "BPX.11": {
      name: "BP Blood Group",
      required: "O",
      repeat: "1",
    },
    "BPX.12": {
      name: "BC Special Testing",
      required: "O",
      repeat: "∞",
    },
    "BPX.13": {
      name: "BP Expiration Date/Time",
      required: "O",
      repeat: "1",
    },
    "BPX.14": {
      name: "BP Quantity",
      required: "R",
      repeat: "1",
    },
    "BPX.15": {
      name: "BP Amount",
      required: "O",
      repeat: "1",
    },
    "BPX.16": {
      name: "BP Units",
      required: "O",
      repeat: "1",
    },
    "BPX.17": {
      name: "BP Unique ID",
      required: "O",
      repeat: "1",
    },
    "BPX.18": {
      name: "BP Actual Dispensed To Location",
      required: "O",
      repeat: "1",
    },
    "BPX.19": {
      name: "BP Actual Dispensed To Address",
      required: "O",
      repeat: "1",
    },
    "BPX.20": {
      name: "BP Dispensed to Receiver",
      required: "O",
      repeat: "1",
    },
    "BPX.21": {
      name: "BP Dispensing Individual",
      required: "O",
      repeat: "1",
    },
  },
  BTS: {
    "BTS.1": {
      name: "Batch Message Count",
      required: "O",
      repeat: "1",
    },
    "BTS.2": {
      name: "Batch Comment",
      required: "O",
      repeat: "1",
    },
    "BTS.3": {
      name: "Batch Totals",
      required: "O",
      repeat: "∞",
    },
  },
  BTX: {
    "BTX.1": {
      name: "Set ID - BTX",
      required: "R",
      repeat: "1",
    },
    "BTX.2": {
      name: "BC Donation ID",
      required: "C",
      repeat: "1",
    },
    "BTX.3": {
      name: "BC Component",
      required: "C",
      repeat: "1",
    },
    "BTX.4": {
      name: "BC Blood Group",
      required: "C",
      repeat: "1",
    },
    "BTX.5": {
      name: "CP Commercial Product",
      required: "C",
      repeat: "1",
    },
    "BTX.6": {
      name: "CP Manufacturer",
      required: "C",
      repeat: "1",
    },
    "BTX.7": {
      name: "CP Lot Number",
      required: "C",
      repeat: "1",
    },
    "BTX.8": {
      name: "BP Quantity",
      required: "R",
      repeat: "1",
    },
    "BTX.9": {
      name: "BP Amount",
      required: "O",
      repeat: "1",
    },
    "BTX.10": {
      name: "BP Units",
      required: "O",
      repeat: "1",
    },
    "BTX.11": {
      name: "BP Transfusion/Disposition Status",
      required: "R",
      repeat: "1",
    },
    "BTX.12": {
      name: "BP Message Status",
      required: "R",
      repeat: "1",
    },
    "BTX.13": {
      name: "BP Date/Time of Status",
      required: "R",
      repeat: "1",
    },
    "BTX.14": {
      name: "BP Administrator",
      required: "O",
      repeat: "1",
    },
    "BTX.15": {
      name: "BP Verifier",
      required: "O",
      repeat: "1",
    },
    "BTX.16": {
      name: "BP Transfusion Start Date/Time of Status",
      required: "O",
      repeat: "1",
    },
    "BTX.17": {
      name: "BP Transfusion End Date/Time of Status",
      required: "O",
      repeat: "1",
    },
    "BTX.18": {
      name: "BP Adverse Reaction Type",
      required: "O",
      repeat: "∞",
    },
    "BTX.19": {
      name: "BP Transfusion Interrupted Reason",
      required: "O",
      repeat: "1",
    },
  },
  CDM: {
    "CDM.1": {
      name: "Primary Key Value - CDM",
      required: "R",
      repeat: "1",
    },
    "CDM.2": {
      name: "Charge Code Alias",
      required: "O",
      repeat: "∞",
    },
    "CDM.3": {
      name: "Charge Description Short",
      required: "R",
      repeat: "1",
    },
    "CDM.4": {
      name: "Charge Description Long",
      required: "O",
      repeat: "1",
    },
    "CDM.5": {
      name: "Description Override Indicator",
      required: "O",
      repeat: "1",
    },
    "CDM.6": {
      name: "Exploding Charges",
      required: "O",
      repeat: "∞",
    },
    "CDM.7": {
      name: "Procedure Code",
      required: "O",
      repeat: "∞",
    },
    "CDM.8": {
      name: "Active/Inactive Flag",
      required: "O",
      repeat: "1",
    },
    "CDM.9": {
      name: "Inventory Number",
      required: "O",
      repeat: "∞",
    },
    "CDM.10": {
      name: "Resource Load",
      required: "O",
      repeat: "1",
    },
    "CDM.11": {
      name: "Contract Number",
      required: "O",
      repeat: "∞",
    },
    "CDM.12": {
      name: "Contract Organization",
      required: "O",
      repeat: "∞",
    },
    "CDM.13": {
      name: "Room Fee Indicator",
      required: "O",
      repeat: "1",
    },
  },
  CER: {
    "CER.1": {
      name: "Set ID - CER",
      required: "R",
      repeat: "1",
    },
    "CER.2": {
      name: "Serial Number",
      required: "O",
      repeat: "1",
    },
    "CER.3": {
      name: "Version",
      required: "O",
      repeat: "1",
    },
    "CER.4": {
      name: "Granting Authority",
      required: "O",
      repeat: "1",
    },
    "CER.5": {
      name: "Issuing Authority",
      required: "O",
      repeat: "1",
    },
    "CER.6": {
      name: "Signature of Issuing Authority",
      required: "O",
      repeat: "1",
    },
    "CER.7": {
      name: "Granting Country",
      required: "O",
      repeat: "1",
    },
    "CER.8": {
      name: "Granting State/Province",
      required: "O",
      repeat: "1",
    },
    "CER.9": {
      name: "Granting County/Parish",
      required: "O",
      repeat: "1",
    },
    "CER.10": {
      name: "Certificate Type",
      required: "O",
      repeat: "1",
    },
    "CER.11": {
      name: "Certificate Domain",
      required: "O",
      repeat: "1",
    },
    "CER.12": {
      name: "Subject ID",
      required: "C",
      repeat: "1",
    },
    "CER.13": {
      name: "Subject Name",
      required: "R",
      repeat: "1",
    },
    "CER.14": {
      name: "Subject Directory Attribute Extension (Health Professional Data)",
      required: "O",
      repeat: "∞",
    },
    "CER.15": {
      name: "Subject Public Key Info",
      required: "O",
      repeat: "1",
    },
    "CER.16": {
      name: "Authority Key Identifier",
      required: "O",
      repeat: "1",
    },
    "CER.17": {
      name: "Basic Constraint",
      required: "O",
      repeat: "1",
    },
    "CER.18": {
      name: "CRL Distribution Point",
      required: "O",
      repeat: "∞",
    },
    "CER.19": {
      name: "Jurisdiction Country",
      required: "O",
      repeat: "1",
    },
    "CER.20": {
      name: "Jurisdiction State/Province",
      required: "O",
      repeat: "1",
    },
    "CER.21": {
      name: "Jurisdiction County/Parish",
      required: "O",
      repeat: "1",
    },
    "CER.22": {
      name: "Jurisdiction Breadth",
      required: "O",
      repeat: "∞",
    },
    "CER.23": {
      name: "Granting Date",
      required: "O",
      repeat: "1",
    },
    "CER.24": {
      name: "Issuing Date",
      required: "O",
      repeat: "1",
    },
    "CER.25": {
      name: "Activation Date",
      required: "O",
      repeat: "1",
    },
    "CER.26": {
      name: "Inactivation Date",
      required: "O",
      repeat: "1",
    },
    "CER.27": {
      name: "Expiration Date",
      required: "O",
      repeat: "1",
    },
    "CER.28": {
      name: "Renewal Date",
      required: "O",
      repeat: "1",
    },
    "CER.29": {
      name: "Revocation Date",
      required: "O",
      repeat: "1",
    },
    "CER.30": {
      name: "Revocation Reason Code",
      required: "O",
      repeat: "1",
    },
    "CER.31": {
      name: "Certificate Status",
      required: "O",
      repeat: "1",
    },
  },
  CM0: {
    "CM0.1": {
      name: "Set ID - CM0",
      required: "O",
      repeat: "1",
    },
    "CM0.2": {
      name: "Sponsor Study ID",
      required: "R",
      repeat: "1",
    },
    "CM0.3": {
      name: "Alternate Study ID",
      required: "O",
      repeat: "3",
    },
    "CM0.4": {
      name: "Title of Study",
      required: "R",
      repeat: "1",
    },
    "CM0.5": {
      name: "Chairman of Study",
      required: "O",
      repeat: "∞",
    },
    "CM0.6": {
      name: "Last IRB Approval Date",
      required: "O",
      repeat: "1",
    },
    "CM0.7": {
      name: "Total Accrual to Date",
      required: "O",
      repeat: "1",
    },
    "CM0.8": {
      name: "Last Accrual Date",
      required: "O",
      repeat: "1",
    },
    "CM0.9": {
      name: "Contact for Study",
      required: "O",
      repeat: "∞",
    },
    "CM0.10": {
      name: "Contact's Telephone Number",
      required: "O",
      repeat: "1",
    },
    "CM0.11": {
      name: "Contact's Address",
      required: "O",
      repeat: "∞",
    },
  },
  CM1: {
    "CM1.1": {
      name: "Set ID - CM1",
      required: "R",
      repeat: "1",
    },
    "CM1.2": {
      name: "Study Phase Identifier",
      required: "R",
      repeat: "1",
    },
    "CM1.3": {
      name: "Description of Study Phase",
      required: "R",
      repeat: "1",
    },
  },
  CM2: {
    "CM2.1": {
      name: "Set ID - CM2",
      required: "O",
      repeat: "1",
    },
    "CM2.2": {
      name: "Scheduled Time Point",
      required: "R",
      repeat: "1",
    },
    "CM2.3": {
      name: "Description of Time Point",
      required: "O",
      repeat: "1",
    },
    "CM2.4": {
      name: "Events Scheduled This Time Point",
      required: "R",
      repeat: "200",
    },
  },
  CNS: {
    "CNS.1": {
      name: "Starting Notification Reference Number",
      required: "O",
      repeat: "1",
    },
    "CNS.2": {
      name: "Ending Notification Reference Number",
      required: "O",
      repeat: "1",
    },
    "CNS.3": {
      name: "Starting Notification Date/Time",
      required: "O",
      repeat: "1",
    },
    "CNS.4": {
      name: "Ending Notification Date/Time",
      required: "O",
      repeat: "1",
    },
    "CNS.5": {
      name: "Starting Notification Code",
      required: "O",
      repeat: "1",
    },
    "CNS.6": {
      name: "Ending Notification Code",
      required: "O",
      repeat: "1",
    },
  },
  CON: {
    "CON.1": {
      name: "Set ID - CON",
      required: "R",
      repeat: "1",
    },
    "CON.2": {
      name: "Consent Type",
      required: "O",
      repeat: "1",
    },
    "CON.3": {
      name: "Consent Form ID",
      required: "O",
      repeat: "1",
    },
    "CON.4": {
      name: "Consent Form Number",
      required: "O",
      repeat: "1",
    },
    "CON.5": {
      name: "Consent Text",
      required: "O",
      repeat: "∞",
    },
    "CON.6": {
      name: "Subject-specific Consent Text",
      required: "O",
      repeat: "∞",
    },
    "CON.7": {
      name: "Consent Background",
      required: "O",
      repeat: "∞",
    },
    "CON.8": {
      name: "Subject-specific Consent Background",
      required: "O",
      repeat: "∞",
    },
    "CON.9": {
      name: "Consenter-imposed limitations",
      required: "O",
      repeat: "∞",
    },
    "CON.10": {
      name: "Consent Mode",
      required: "O",
      repeat: "1",
    },
    "CON.11": {
      name: "Consent Status",
      required: "R",
      repeat: "1",
    },
    "CON.12": {
      name: "Consent Discussion Date/Time",
      required: "O",
      repeat: "1",
    },
    "CON.13": {
      name: "Consent Decision Date/Time",
      required: "O",
      repeat: "1",
    },
    "CON.14": {
      name: "Consent Effective Date/Time",
      required: "O",
      repeat: "1",
    },
    "CON.15": {
      name: "Consent End Date/Time",
      required: "O",
      repeat: "1",
    },
    "CON.16": {
      name: "Subject Competence Indicator",
      required: "O",
      repeat: "1",
    },
    "CON.17": {
      name: "Translator Assistance Indicator",
      required: "O",
      repeat: "1",
    },
    "CON.18": {
      name: "Language Translated To",
      required: "O",
      repeat: "1",
    },
    "CON.19": {
      name: "Informational Material Supplied Indicator",
      required: "O",
      repeat: "1",
    },
    "CON.20": {
      name: "Consent Bypass Reason",
      required: "O",
      repeat: "1",
    },
    "CON.21": {
      name: "Consent Disclosure Level",
      required: "O",
      repeat: "1",
    },
    "CON.22": {
      name: "Consent Non-disclosure Reason",
      required: "O",
      repeat: "1",
    },
    "CON.23": {
      name: "Non-subject Consenter Reason",
      required: "O",
      repeat: "1",
    },
    "CON.24": {
      name: "Consenter ID",
      required: "R",
      repeat: "∞",
    },
    "CON.25": {
      name: "Relationship to Subject Table",
      required: "R",
      repeat: "∞",
    },
  },
  CSP: {
    "CSP.1": {
      name: "Study Phase Identifier",
      required: "R",
      repeat: "1",
    },
    "CSP.2": {
      name: "Date/time Study Phase Began",
      required: "R",
      repeat: "1",
    },
    "CSP.3": {
      name: "Date/time Study Phase Ended",
      required: "O",
      repeat: "1",
    },
    "CSP.4": {
      name: "Study Phase Evaluability",
      required: "C",
      repeat: "1",
    },
  },
  CSR: {
    "CSR.1": {
      name: "Sponsor Study ID",
      required: "R",
      repeat: "1",
    },
    "CSR.2": {
      name: "Alternate Study ID",
      required: "O",
      repeat: "1",
    },
    "CSR.3": {
      name: "Institution Registering the Patient",
      required: "O",
      repeat: "1",
    },
    "CSR.4": {
      name: "Sponsor Patient ID",
      required: "R",
      repeat: "1",
    },
    "CSR.5": {
      name: "Alternate Patient ID - CSR",
      required: "O",
      repeat: "1",
    },
    "CSR.6": {
      name: "Date/Time Of Patient Study Registration",
      required: "R",
      repeat: "1",
    },
    "CSR.7": {
      name: "Person Performing Study Registration",
      required: "O",
      repeat: "∞",
    },
    "CSR.8": {
      name: "Study Authorizing Provider",
      required: "R",
      repeat: "∞",
    },
    "CSR.9": {
      name: "Date/time Patient Study Consent Signed",
      required: "C",
      repeat: "1",
    },
    "CSR.10": {
      name: "Patient Study Eligibility Status",
      required: "C",
      repeat: "1",
    },
    "CSR.11": {
      name: "Study Randomization Date/time",
      required: "O",
      repeat: "3",
    },
    "CSR.12": {
      name: "Randomized Study Arm",
      required: "O",
      repeat: "3",
    },
    "CSR.13": {
      name: "Stratum for Study Randomization",
      required: "O",
      repeat: "3",
    },
    "CSR.14": {
      name: "Patient Evaluability Status",
      required: "C",
      repeat: "1",
    },
    "CSR.15": {
      name: "Date/time Ended Study",
      required: "C",
      repeat: "1",
    },
    "CSR.16": {
      name: "Reason Ended Study",
      required: "C",
      repeat: "1",
    },
  },
  CSS: {
    "CSS.1": {
      name: "Study Scheduled Time Point",
      required: "R",
      repeat: "1",
    },
    "CSS.2": {
      name: "Study Scheduled Patient Time Point",
      required: "O",
      repeat: "1",
    },
    "CSS.3": {
      name: "Study Quality Control Codes",
      required: "O",
      repeat: "3",
    },
  },
  CTD: {
    "CTD.1": {
      name: "Contact Role",
      required: "R",
      repeat: "∞",
    },
    "CTD.2": {
      name: "Contact Name",
      required: "O",
      repeat: "∞",
    },
    "CTD.3": {
      name: "Contact Address",
      required: "O",
      repeat: "∞",
    },
    "CTD.4": {
      name: "Contact Location",
      required: "O",
      repeat: "1",
    },
    "CTD.5": {
      name: "Contact Communication Information",
      required: "O",
      repeat: "∞",
    },
    "CTD.6": {
      name: "Preferred Method of Contact",
      required: "O",
      repeat: "1",
    },
    "CTD.7": {
      name: "Contact Identifiers",
      required: "O",
      repeat: "∞",
    },
  },
  CTI: {
    "CTI.1": {
      name: "Sponsor Study ID",
      required: "R",
      repeat: "1",
    },
    "CTI.2": {
      name: "Study Phase Identifier",
      required: "C",
      repeat: "1",
    },
    "CTI.3": {
      name: "Study Scheduled Time Point",
      required: "O",
      repeat: "1",
    },
  },
  DB1: {
    "DB1.1": {
      name: "Set ID - DB1",
      required: "R",
      repeat: "1",
    },
    "DB1.2": {
      name: "Disabled Person Code",
      required: "O",
      repeat: "1",
    },
    "DB1.3": {
      name: "Disabled Person Identifier",
      required: "O",
      repeat: "∞",
    },
    "DB1.4": {
      name: "Disabled Indicator",
      required: "O",
      repeat: "1",
    },
    "DB1.5": {
      name: "Disability Start Date",
      required: "O",
      repeat: "1",
    },
    "DB1.6": {
      name: "Disability End Date",
      required: "O",
      repeat: "1",
    },
    "DB1.7": {
      name: "Disability Return to Work Date",
      required: "O",
      repeat: "1",
    },
    "DB1.8": {
      name: "Disability Unable to Work Date",
      required: "O",
      repeat: "1",
    },
  },
  DG1: {
    "DG1.1": {
      name: "Set ID - DG1",
      required: "R",
      repeat: "1",
    },
    "DG1.2": {
      name: "Diagnosis Coding Method",
      required: "B",
      repeat: "1",
    },
    "DG1.3": {
      name: "Diagnosis Code - DG1",
      required: "O",
      repeat: "1",
    },
    "DG1.4": {
      name: "Diagnosis Description",
      required: "B",
      repeat: "1",
    },
    "DG1.5": {
      name: "Diagnosis Date/Time",
      required: "O",
      repeat: "1",
    },
    "DG1.6": {
      name: "Diagnosis Type",
      required: "R",
      repeat: "1",
    },
    "DG1.7": {
      name: "Major Diagnostic Category",
      required: "B",
      repeat: "1",
    },
    "DG1.8": {
      name: "Diagnostic Related Group",
      required: "B",
      repeat: "1",
    },
    "DG1.9": {
      name: "DRG Approval Indicator",
      required: "B",
      repeat: "1",
    },
    "DG1.10": {
      name: "DRG Grouper Review Code",
      required: "B",
      repeat: "1",
    },
    "DG1.11": {
      name: "Outlier Type",
      required: "B",
      repeat: "1",
    },
    "DG1.12": {
      name: "Outlier Days",
      required: "B",
      repeat: "1",
    },
    "DG1.13": {
      name: "Outlier Cost",
      required: "B",
      repeat: "1",
    },
    "DG1.14": {
      name: "Grouper Version And Type",
      required: "B",
      repeat: "1",
    },
    "DG1.15": {
      name: "Diagnosis Priority",
      required: "O",
      repeat: "1",
    },
    "DG1.16": {
      name: "Diagnosing Clinician",
      required: "O",
      repeat: "∞",
    },
    "DG1.17": {
      name: "Diagnosis Classification",
      required: "O",
      repeat: "1",
    },
    "DG1.18": {
      name: "Confidential Indicator",
      required: "O",
      repeat: "1",
    },
    "DG1.19": {
      name: "Attestation Date/Time",
      required: "O",
      repeat: "1",
    },
    "DG1.20": {
      name: "Diagnosis Identifier",
      required: "C",
      repeat: "1",
    },
    "DG1.21": {
      name: "Diagnosis Action Code",
      required: "C",
      repeat: "1",
    },
  },
  DRG: {
    "DRG.1": {
      name: "Diagnostic Related Group",
      required: "O",
      repeat: "1",
    },
    "DRG.2": {
      name: "DRG Assigned Date/Time",
      required: "O",
      repeat: "1",
    },
    "DRG.3": {
      name: "DRG Approval Indicator",
      required: "O",
      repeat: "1",
    },
    "DRG.4": {
      name: "DRG Grouper Review Code",
      required: "O",
      repeat: "1",
    },
    "DRG.5": {
      name: "Outlier Type",
      required: "O",
      repeat: "1",
    },
    "DRG.6": {
      name: "Outlier Days",
      required: "O",
      repeat: "1",
    },
    "DRG.7": {
      name: "Outlier Cost",
      required: "O",
      repeat: "1",
    },
    "DRG.8": {
      name: "DRG Payor",
      required: "O",
      repeat: "1",
    },
    "DRG.9": {
      name: "Outlier Reimbursement",
      required: "O",
      repeat: "1",
    },
    "DRG.10": {
      name: "Confidential Indicator",
      required: "O",
      repeat: "1",
    },
    "DRG.11": {
      name: "DRG Transfer Type",
      required: "O",
      repeat: "1",
    },
  },
  DSC: {
    "DSC.1": {
      name: "Continuation Pointer",
      required: "O",
      repeat: "1",
    },
    "DSC.2": {
      name: "Continuation Style",
      required: "O",
      repeat: "1",
    },
  },
  DSP: {
    "DSP.1": {
      name: "Set ID - DSP",
      required: "O",
      repeat: "1",
    },
    "DSP.2": {
      name: "Display Level",
      required: "O",
      repeat: "1",
    },
    "DSP.3": {
      name: "Data Line",
      required: "R",
      repeat: "1",
    },
    "DSP.4": {
      name: "Logical Break Point",
      required: "O",
      repeat: "1",
    },
    "DSP.5": {
      name: "Result ID",
      required: "O",
      repeat: "1",
    },
  },
  ECD: {
    "ECD.1": {
      name: "Reference Command Number",
      required: "R",
      repeat: "1",
    },
    "ECD.2": {
      name: "Remote Control Command",
      required: "R",
      repeat: "1",
    },
    "ECD.3": {
      name: "Response Required",
      required: "O",
      repeat: "1",
    },
    "ECD.4": {
      name: "Requested Completion Time",
      required: "B",
      repeat: "1",
    },
    "ECD.5": {
      name: "Parameters",
      required: "O",
      repeat: "∞",
    },
  },
  ECR: {
    "ECR.1": {
      name: "Command Response",
      required: "R",
      repeat: "1",
    },
    "ECR.2": {
      name: "Date/Time Completed",
      required: "R",
      repeat: "1",
    },
    "ECR.3": {
      name: "Command Response Parameters",
      required: "O",
      repeat: "∞",
    },
  },
  EDU: {
    "EDU.1": {
      name: "Set ID - EDU",
      required: "R",
      repeat: "1",
    },
    "EDU.2": {
      name: "Academic Degree",
      required: "O",
      repeat: "1",
    },
    "EDU.3": {
      name: "Academic Degree Program Date Range",
      required: "O",
      repeat: "1",
    },
    "EDU.4": {
      name: "Academic Degree Program Participation Date Range",
      required: "O",
      repeat: "1",
    },
    "EDU.5": {
      name: "Academic Degree Granted Date",
      required: "O",
      repeat: "1",
    },
    "EDU.6": {
      name: "School",
      required: "O",
      repeat: "1",
    },
    "EDU.7": {
      name: "School Type Code",
      required: "O",
      repeat: "1",
    },
    "EDU.8": {
      name: "School Address",
      required: "O",
      repeat: "1",
    },
    "EDU.9": {
      name: "Major Field of Study",
      required: "O",
      repeat: "∞",
    },
  },
  EQL: {
    "EQL.1": {
      name: "Query Tag",
      required: "O",
      repeat: "1",
    },
    "EQL.2": {
      name: "Query/Response Format Code",
      required: "R",
      repeat: "1",
    },
    "EQL.3": {
      name: "EQL Query Name",
      required: "R",
      repeat: "1",
    },
    "EQL.4": {
      name: "EQL Query Statement",
      required: "R",
      repeat: "1",
    },
  },
  EQP: {
    "EQP.1": {
      name: "Event type",
      required: "R",
      repeat: "1",
    },
    "EQP.2": {
      name: "File Name",
      required: "O",
      repeat: "1",
    },
    "EQP.3": {
      name: "Start Date/Time",
      required: "R",
      repeat: "1",
    },
    "EQP.4": {
      name: "End Date/Time",
      required: "O",
      repeat: "1",
    },
    "EQP.5": {
      name: "Transaction Data",
      required: "R",
      repeat: "1",
    },
  },
  EQU: {
    "EQU.1": {
      name: "Equipment Instance Identifier",
      required: "R",
      repeat: "1",
    },
    "EQU.2": {
      name: "Event Date/Time",
      required: "R",
      repeat: "1",
    },
    "EQU.3": {
      name: "Equipment State",
      required: "C",
      repeat: "1",
    },
    "EQU.4": {
      name: "Local/Remote Control State",
      required: "O",
      repeat: "1",
    },
    "EQU.5": {
      name: "Alert Level",
      required: "O",
      repeat: "1",
    },
  },
  ERQ: {
    "ERQ.1": {
      name: "Query Tag",
      required: "O",
      repeat: "1",
    },
    "ERQ.2": {
      name: "Event Identifier",
      required: "R",
      repeat: "1",
    },
    "ERQ.3": {
      name: "Input Parameter List",
      required: "O",
      repeat: "∞",
    },
  },
  ERR: {
    "ERR.1": {
      name: "Error Code and Location",
      required: "B",
      repeat: "∞",
    },
    "ERR.2": {
      name: "Error Location",
      required: "O",
      repeat: "∞",
    },
    "ERR.3": {
      name: "HL7 Error Code",
      required: "R",
      repeat: "1",
    },
    "ERR.4": {
      name: "Severity",
      required: "R",
      repeat: "1",
    },
    "ERR.5": {
      name: "Application Error Code",
      required: "O",
      repeat: "1",
    },
    "ERR.6": {
      name: "Application Error Parameter",
      required: "O",
      repeat: "10",
    },
    "ERR.7": {
      name: "Diagnostic Information",
      required: "O",
      repeat: "1",
    },
    "ERR.8": {
      name: "User Message",
      required: "O",
      repeat: "1",
    },
    "ERR.9": {
      name: "Inform Person Indicator",
      required: "O",
      repeat: "∞",
    },
    "ERR.10": {
      name: "Override Type",
      required: "O",
      repeat: "1",
    },
    "ERR.11": {
      name: "Override Reason Code",
      required: "O",
      repeat: "∞",
    },
    "ERR.12": {
      name: "Help Desk Contact Point",
      required: "O",
      repeat: "∞",
    },
  },
  EVN: {
    "EVN.1": {
      name: "Event Type Code",
      required: "B",
      repeat: "1",
    },
    "EVN.2": {
      name: "Recorded Date/Time",
      required: "R",
      repeat: "1",
    },
    "EVN.3": {
      name: "Date/Time Planned Event",
      required: "O",
      repeat: "1",
    },
    "EVN.4": {
      name: "Event Reason Code",
      required: "O",
      repeat: "1",
    },
    "EVN.5": {
      name: "Operator ID",
      required: "O",
      repeat: "∞",
    },
    "EVN.6": {
      name: "Event Occurred",
      required: "O",
      repeat: "1",
    },
    "EVN.7": {
      name: "Event Facility",
      required: "O",
      repeat: "1",
    },
  },
  FAC: {
    "FAC.1": {
      name: "Facility ID-FAC",
      required: "R",
      repeat: "1",
    },
    "FAC.2": {
      name: "Facility Type",
      required: "O",
      repeat: "1",
    },
    "FAC.3": {
      name: "Facility Address",
      required: "R",
      repeat: "∞",
    },
    "FAC.4": {
      name: "Facility Telecommunication",
      required: "R",
      repeat: "1",
    },
    "FAC.5": {
      name: "Contact Person",
      required: "O",
      repeat: "∞",
    },
    "FAC.6": {
      name: "Contact Title",
      required: "O",
      repeat: "∞",
    },
    "FAC.7": {
      name: "Contact Address",
      required: "O",
      repeat: "∞",
    },
    "FAC.8": {
      name: "Contact Telecommunication",
      required: "O",
      repeat: "∞",
    },
    "FAC.9": {
      name: "Signature Authority",
      required: "R",
      repeat: "∞",
    },
    "FAC.10": {
      name: "Signature Authority Title",
      required: "O",
      repeat: "1",
    },
    "FAC.11": {
      name: "Signature Authority Address",
      required: "O",
      repeat: "∞",
    },
    "FAC.12": {
      name: "Signature Authority Telecommunication",
      required: "O",
      repeat: "1",
    },
  },
  FHS: {
    "FHS.1": {
      name: "File Field Separator",
      required: "R",
      repeat: "1",
    },
    "FHS.2": {
      name: "File Encoding Characters",
      required: "R",
      repeat: "1",
    },
    "FHS.3": {
      name: "File Sending Application",
      required: "O",
      repeat: "1",
    },
    "FHS.4": {
      name: "File Sending Facility",
      required: "O",
      repeat: "1",
    },
    "FHS.5": {
      name: "File Receiving Application",
      required: "O",
      repeat: "1",
    },
    "FHS.6": {
      name: "File Receiving Facility",
      required: "O",
      repeat: "1",
    },
    "FHS.7": {
      name: "File Creation Date/Time",
      required: "O",
      repeat: "1",
    },
    "FHS.8": {
      name: "File Security",
      required: "O",
      repeat: "1",
    },
    "FHS.9": {
      name: "File Name/ID",
      required: "O",
      repeat: "1",
    },
    "FHS.10": {
      name: "File Header Comment",
      required: "O",
      repeat: "1",
    },
    "FHS.11": {
      name: "File Control ID",
      required: "O",
      repeat: "1",
    },
    "FHS.12": {
      name: "Reference File Control ID",
      required: "O",
      repeat: "1",
    },
  },
  FT1: {
    "FT1.1": {
      name: "Set ID - FT1",
      required: "O",
      repeat: "1",
    },
    "FT1.2": {
      name: "Transaction ID",
      required: "O",
      repeat: "1",
    },
    "FT1.3": {
      name: "Transaction Batch ID",
      required: "O",
      repeat: "1",
    },
    "FT1.4": {
      name: "Transaction Date",
      required: "R",
      repeat: "1",
    },
    "FT1.5": {
      name: "Transaction Posting Date",
      required: "O",
      repeat: "1",
    },
    "FT1.6": {
      name: "Transaction Type",
      required: "R",
      repeat: "1",
    },
    "FT1.7": {
      name: "Transaction Code",
      required: "R",
      repeat: "1",
    },
    "FT1.8": {
      name: "Transaction Description",
      required: "B",
      repeat: "1",
    },
    "FT1.9": {
      name: "Transaction Description - Alt",
      required: "B",
      repeat: "1",
    },
    "FT1.10": {
      name: "Transaction Quantity",
      required: "O",
      repeat: "1",
    },
    "FT1.11": {
      name: "Transaction Amount - Extended",
      required: "O",
      repeat: "1",
    },
    "FT1.12": {
      name: "Transaction Amount - Unit",
      required: "O",
      repeat: "1",
    },
    "FT1.13": {
      name: "Department Code",
      required: "O",
      repeat: "1",
    },
    "FT1.14": {
      name: "Insurance Plan ID",
      required: "O",
      repeat: "1",
    },
    "FT1.15": {
      name: "Insurance Amount",
      required: "O",
      repeat: "1",
    },
    "FT1.16": {
      name: "Assigned Patient Location",
      required: "O",
      repeat: "1",
    },
    "FT1.17": {
      name: "Fee Schedule",
      required: "O",
      repeat: "1",
    },
    "FT1.18": {
      name: "Patient Type",
      required: "O",
      repeat: "1",
    },
    "FT1.19": {
      name: "Diagnosis Code - FT1",
      required: "O",
      repeat: "∞",
    },
    "FT1.20": {
      name: "Performed By Code",
      required: "O",
      repeat: "∞",
    },
    "FT1.21": {
      name: "Ordered By Code",
      required: "O",
      repeat: "∞",
    },
    "FT1.22": {
      name: "Unit Cost",
      required: "O",
      repeat: "1",
    },
    "FT1.23": {
      name: "Filler Order Number",
      required: "O",
      repeat: "1",
    },
    "FT1.24": {
      name: "Entered By Code",
      required: "O",
      repeat: "∞",
    },
    "FT1.25": {
      name: "Procedure Code",
      required: "O",
      repeat: "1",
    },
    "FT1.26": {
      name: "Procedure Code Modifier",
      required: "O",
      repeat: "∞",
    },
    "FT1.27": {
      name: "Advanced Beneficiary Notice Code",
      required: "O",
      repeat: "1",
    },
    "FT1.28": {
      name: "Medically Necessary Duplicate Procedure Reason.",
      required: "O",
      repeat: "1",
    },
    "FT1.29": {
      name: "NDC Code",
      required: "O",
      repeat: "1",
    },
    "FT1.30": {
      name: "Payment Reference ID",
      required: "O",
      repeat: "1",
    },
    "FT1.31": {
      name: "Transaction Reference Key",
      required: "O",
      repeat: "∞",
    },
  },
  FTS: {
    "FTS.1": {
      name: "File Batch Count",
      required: "O",
      repeat: "1",
    },
    "FTS.2": {
      name: "File Trailer Comment",
      required: "O",
      repeat: "1",
    },
  },
  GOL: {
    "GOL.1": {
      name: "Action Code",
      required: "R",
      repeat: "1",
    },
    "GOL.2": {
      name: "Action Date/Time",
      required: "R",
      repeat: "1",
    },
    "GOL.3": {
      name: "Goal ID",
      required: "R",
      repeat: "1",
    },
    "GOL.4": {
      name: "Goal Instance ID",
      required: "R",
      repeat: "1",
    },
    "GOL.5": {
      name: "Episode of Care ID",
      required: "O",
      repeat: "1",
    },
    "GOL.6": {
      name: "Goal List Priority",
      required: "O",
      repeat: "1",
    },
    "GOL.7": {
      name: "Goal Established Date/Time",
      required: "O",
      repeat: "1",
    },
    "GOL.8": {
      name: "Expected Goal Achieve Date/Time",
      required: "O",
      repeat: "1",
    },
    "GOL.9": {
      name: "Goal Classification",
      required: "O",
      repeat: "1",
    },
    "GOL.10": {
      name: "Goal Management Discipline",
      required: "O",
      repeat: "1",
    },
    "GOL.11": {
      name: "Current Goal Review Status",
      required: "O",
      repeat: "1",
    },
    "GOL.12": {
      name: "Current Goal Review Date/Time",
      required: "O",
      repeat: "1",
    },
    "GOL.13": {
      name: "Next Goal Review Date/Time",
      required: "O",
      repeat: "1",
    },
    "GOL.14": {
      name: "Previous Goal Review Date/Time",
      required: "O",
      repeat: "1",
    },
    "GOL.15": {
      name: "Goal Review Interval",
      required: "O",
      repeat: "1",
    },
    "GOL.16": {
      name: "Goal Evaluation",
      required: "O",
      repeat: "1",
    },
    "GOL.17": {
      name: "Goal Evaluation Comment",
      required: "O",
      repeat: "∞",
    },
    "GOL.18": {
      name: "Goal Life Cycle Status",
      required: "O",
      repeat: "1",
    },
    "GOL.19": {
      name: "Goal Life Cycle Status Date/Time",
      required: "O",
      repeat: "1",
    },
    "GOL.20": {
      name: "Goal Target Type",
      required: "O",
      repeat: "∞",
    },
    "GOL.21": {
      name: "Goal Target Name",
      required: "O",
      repeat: "∞",
    },
  },
  GP1: {
    "GP1.1": {
      name: "Type of Bill Code",
      required: "R",
      repeat: "1",
    },
    "GP1.2": {
      name: "Revenue Code",
      required: "O",
      repeat: "∞",
    },
    "GP1.3": {
      name: "Overall Claim Disposition Code",
      required: "O",
      repeat: "1",
    },
    "GP1.4": {
      name: "OCE Edits per Visit Code",
      required: "O",
      repeat: "∞",
    },
    "GP1.5": {
      name: "Outlier Cost",
      required: "O",
      repeat: "1",
    },
  },
  GP2: {
    "GP2.1": {
      name: "Revenue Code",
      required: "O",
      repeat: "1",
    },
    "GP2.2": {
      name: "Number of Service Units",
      required: "O",
      repeat: "1",
    },
    "GP2.3": {
      name: "Charge",
      required: "O",
      repeat: "1",
    },
    "GP2.4": {
      name: "Reimbursement Action Code",
      required: "O",
      repeat: "1",
    },
    "GP2.5": {
      name: "Denial or Rejection Code",
      required: "O",
      repeat: "1",
    },
    "GP2.6": {
      name: "OCE Edit Code",
      required: "O",
      repeat: "∞",
    },
    "GP2.7": {
      name: "Ambulatory Payment Classification Code",
      required: "O",
      repeat: "1",
    },
    "GP2.8": {
      name: "Modifier Edit Code",
      required: "O",
      repeat: "∞",
    },
    "GP2.9": {
      name: "Payment Adjustment Code",
      required: "O",
      repeat: "1",
    },
    "GP2.10": {
      name: "Packaging Status Code",
      required: "O",
      repeat: "1",
    },
    "GP2.11": {
      name: "Expected CMS Payment Amount",
      required: "O",
      repeat: "1",
    },
    "GP2.12": {
      name: "Reimbursement Type Code",
      required: "O",
      repeat: "1",
    },
    "GP2.13": {
      name: "Co-Pay Amount",
      required: "O",
      repeat: "1",
    },
    "GP2.14": {
      name: "Pay Rate per Service Unit",
      required: "O",
      repeat: "1",
    },
  },
  GT1: {
    "GT1.1": {
      name: "Set ID - GT1",
      required: "R",
      repeat: "1",
    },
    "GT1.2": {
      name: "Guarantor Number",
      required: "O",
      repeat: "∞",
    },
    "GT1.3": {
      name: "Guarantor Name",
      required: "R",
      repeat: "∞",
    },
    "GT1.4": {
      name: "Guarantor Spouse Name",
      required: "O",
      repeat: "∞",
    },
    "GT1.5": {
      name: "Guarantor Address",
      required: "O",
      repeat: "∞",
    },
    "GT1.6": {
      name: "Guarantor Ph Num - Home",
      required: "O",
      repeat: "∞",
    },
    "GT1.7": {
      name: "Guarantor Ph Num - Business",
      required: "O",
      repeat: "∞",
    },
    "GT1.8": {
      name: "Guarantor Date/Time Of Birth",
      required: "O",
      repeat: "1",
    },
    "GT1.9": {
      name: "Guarantor Administrative Sex",
      required: "O",
      repeat: "1",
    },
    "GT1.10": {
      name: "Guarantor Type",
      required: "O",
      repeat: "1",
    },
    "GT1.11": {
      name: "Guarantor Relationship",
      required: "O",
      repeat: "1",
    },
    "GT1.12": {
      name: "Guarantor SSN",
      required: "O",
      repeat: "1",
    },
    "GT1.13": {
      name: "Guarantor Date - Begin",
      required: "O",
      repeat: "1",
    },
    "GT1.14": {
      name: "Guarantor Date - End",
      required: "O",
      repeat: "1",
    },
    "GT1.15": {
      name: "Guarantor Priority",
      required: "O",
      repeat: "1",
    },
    "GT1.16": {
      name: "Guarantor Employer Name",
      required: "O",
      repeat: "∞",
    },
    "GT1.17": {
      name: "Guarantor Employer Address",
      required: "O",
      repeat: "∞",
    },
    "GT1.18": {
      name: "Guarantor Employer Phone Number",
      required: "O",
      repeat: "∞",
    },
    "GT1.19": {
      name: "Guarantor Employee ID Number",
      required: "O",
      repeat: "∞",
    },
    "GT1.20": {
      name: "Guarantor Employment Status",
      required: "O",
      repeat: "1",
    },
    "GT1.21": {
      name: "Guarantor Organization Name",
      required: "O",
      repeat: "∞",
    },
    "GT1.22": {
      name: "Guarantor Billing Hold Flag",
      required: "O",
      repeat: "1",
    },
    "GT1.23": {
      name: "Guarantor Credit Rating Code",
      required: "O",
      repeat: "1",
    },
    "GT1.24": {
      name: "Guarantor Death Date And Time",
      required: "O",
      repeat: "1",
    },
    "GT1.25": {
      name: "Guarantor Death Flag",
      required: "O",
      repeat: "1",
    },
    "GT1.26": {
      name: "Guarantor Charge Adjustment Code",
      required: "O",
      repeat: "1",
    },
    "GT1.27": {
      name: "Guarantor Household Annual Income",
      required: "O",
      repeat: "1",
    },
    "GT1.28": {
      name: "Guarantor Household Size",
      required: "O",
      repeat: "1",
    },
    "GT1.29": {
      name: "Guarantor Employer ID Number",
      required: "O",
      repeat: "∞",
    },
    "GT1.30": {
      name: "Guarantor Marital Status Code",
      required: "O",
      repeat: "1",
    },
    "GT1.31": {
      name: "Guarantor Hire Effective Date",
      required: "O",
      repeat: "1",
    },
    "GT1.32": {
      name: "Employment Stop Date",
      required: "O",
      repeat: "1",
    },
    "GT1.33": {
      name: "Living Dependency",
      required: "O",
      repeat: "1",
    },
    "GT1.34": {
      name: "Ambulatory Status",
      required: "O",
      repeat: "∞",
    },
    "GT1.35": {
      name: "Citizenship",
      required: "O",
      repeat: "∞",
    },
    "GT1.36": {
      name: "Primary Language",
      required: "O",
      repeat: "1",
    },
    "GT1.37": {
      name: "Living Arrangement",
      required: "O",
      repeat: "1",
    },
    "GT1.38": {
      name: "Publicity Code",
      required: "O",
      repeat: "1",
    },
    "GT1.39": {
      name: "Protection Indicator",
      required: "O",
      repeat: "1",
    },
    "GT1.40": {
      name: "Student Indicator",
      required: "O",
      repeat: "1",
    },
    "GT1.41": {
      name: "Religion",
      required: "O",
      repeat: "1",
    },
    "GT1.42": {
      name: "Mother's Maiden Name",
      required: "O",
      repeat: "∞",
    },
    "GT1.43": {
      name: "Nationality",
      required: "O",
      repeat: "1",
    },
    "GT1.44": {
      name: "Ethnic Group",
      required: "O",
      repeat: "∞",
    },
    "GT1.45": {
      name: "Contact Person's Name",
      required: "O",
      repeat: "∞",
    },
    "GT1.46": {
      name: "Contact Person's Telephone Number",
      required: "O",
      repeat: "∞",
    },
    "GT1.47": {
      name: "Contact Reason",
      required: "O",
      repeat: "1",
    },
    "GT1.48": {
      name: "Contact Relationship",
      required: "O",
      repeat: "1",
    },
    "GT1.49": {
      name: "Job Title",
      required: "O",
      repeat: "1",
    },
    "GT1.50": {
      name: "Job Code/Class",
      required: "O",
      repeat: "1",
    },
    "GT1.51": {
      name: "Guarantor Employer's Organization Name",
      required: "O",
      repeat: "∞",
    },
    "GT1.52": {
      name: "Handicap",
      required: "O",
      repeat: "1",
    },
    "GT1.53": {
      name: "Job Status",
      required: "O",
      repeat: "1",
    },
    "GT1.54": {
      name: "Guarantor Financial Class",
      required: "O",
      repeat: "1",
    },
    "GT1.55": {
      name: "Guarantor Race",
      required: "O",
      repeat: "∞",
    },
    "GT1.56": {
      name: "Guarantor Birth Place",
      required: "O",
      repeat: "1",
    },
    "GT1.57": {
      name: "VIP Indicator",
      required: "O",
      repeat: "1",
    },
  },
  IAM: {
    "IAM.1": {
      name: "Set ID - IAM",
      required: "R",
      repeat: "1",
    },
    "IAM.2": {
      name: "Allergen Type Code",
      required: "O",
      repeat: "1",
    },
    "IAM.3": {
      name: "Allergen Code/Mnemonic/Description",
      required: "R",
      repeat: "1",
    },
    "IAM.4": {
      name: "Allergy Severity Code",
      required: "O",
      repeat: "1",
    },
    "IAM.5": {
      name: "Allergy Reaction Code",
      required: "O",
      repeat: "∞",
    },
    "IAM.6": {
      name: "Allergy Action Code",
      required: "R",
      repeat: "1",
    },
    "IAM.7": {
      name: "Allergy Unique Identifier",
      required: "C",
      repeat: "1",
    },
    "IAM.8": {
      name: "Action Reason",
      required: "O",
      repeat: "1",
    },
    "IAM.9": {
      name: "Sensitivity to Causative Agent Code",
      required: "O",
      repeat: "1",
    },
    "IAM.10": {
      name: "Allergen Group Code/Mnemonic/Description",
      required: "O",
      repeat: "1",
    },
    "IAM.11": {
      name: "Onset Date",
      required: "O",
      repeat: "1",
    },
    "IAM.12": {
      name: "Onset Date Text",
      required: "O",
      repeat: "1",
    },
    "IAM.13": {
      name: "Reported Date/Time",
      required: "O",
      repeat: "1",
    },
    "IAM.14": {
      name: "Reported By",
      required: "O",
      repeat: "1",
    },
    "IAM.15": {
      name: "Relationship to Patient Code",
      required: "O",
      repeat: "1",
    },
    "IAM.16": {
      name: "Alert Device Code",
      required: "O",
      repeat: "1",
    },
    "IAM.17": {
      name: "Allergy Clinical Status Code",
      required: "O",
      repeat: "1",
    },
    "IAM.18": {
      name: "Statused by Person",
      required: "O",
      repeat: "1",
    },
    "IAM.19": {
      name: "Statused by Organization",
      required: "O",
      repeat: "1",
    },
    "IAM.20": {
      name: "Statused at Date/Time",
      required: "O",
      repeat: "1",
    },
  },
  IIM: {
    "IIM.1": {
      name: "Primary Key Value - IIM",
      required: "R",
      repeat: "1",
    },
    "IIM.2": {
      name: "Service Item Code",
      required: "R",
      repeat: "1",
    },
    "IIM.3": {
      name: "Inventory Lot Number",
      required: "O",
      repeat: "1",
    },
    "IIM.4": {
      name: "Inventory Expiration Date",
      required: "O",
      repeat: "1",
    },
    "IIM.5": {
      name: "Inventory Manufacturer Name",
      required: "O",
      repeat: "1",
    },
    "IIM.6": {
      name: "Inventory Location",
      required: "O",
      repeat: "1",
    },
    "IIM.7": {
      name: "Inventory Received Date",
      required: "O",
      repeat: "1",
    },
    "IIM.8": {
      name: "Inventory Received Quantity",
      required: "O",
      repeat: "1",
    },
    "IIM.9": {
      name: "Inventory Received Quantity Unit",
      required: "O",
      repeat: "1",
    },
    "IIM.10": {
      name: "Inventory Received Item Cost",
      required: "O",
      repeat: "1",
    },
    "IIM.11": {
      name: "Inventory On Hand Date",
      required: "O",
      repeat: "1",
    },
    "IIM.12": {
      name: "Inventory On Hand Quantity",
      required: "O",
      repeat: "1",
    },
    "IIM.13": {
      name: "Inventory On Hand Quantity Unit",
      required: "O",
      repeat: "1",
    },
    "IIM.14": {
      name: "Procedure Code",
      required: "O",
      repeat: "1",
    },
    "IIM.15": {
      name: "Procedure Code Modifier",
      required: "O",
      repeat: "∞",
    },
  },
  IN1: {
    "IN1.1": {
      name: "Set ID - IN1",
      required: "R",
      repeat: "1",
    },
    "IN1.2": {
      name: "Insurance Plan ID",
      required: "R",
      repeat: "1",
    },
    "IN1.3": {
      name: "Insurance Company ID",
      required: "R",
      repeat: "∞",
    },
    "IN1.4": {
      name: "Insurance Company Name",
      required: "O",
      repeat: "∞",
    },
    "IN1.5": {
      name: "Insurance Company Address",
      required: "O",
      repeat: "∞",
    },
    "IN1.6": {
      name: "Insurance Co Contact Person",
      required: "O",
      repeat: "∞",
    },
    "IN1.7": {
      name: "Insurance Co Phone Number",
      required: "O",
      repeat: "∞",
    },
    "IN1.8": {
      name: "Group Number",
      required: "O",
      repeat: "1",
    },
    "IN1.9": {
      name: "Group Name",
      required: "O",
      repeat: "∞",
    },
    "IN1.10": {
      name: "Insured's Group Emp ID",
      required: "O",
      repeat: "∞",
    },
    "IN1.11": {
      name: "Insured's Group Emp Name",
      required: "O",
      repeat: "∞",
    },
    "IN1.12": {
      name: "Plan Effective Date",
      required: "O",
      repeat: "1",
    },
    "IN1.13": {
      name: "Plan Expiration Date",
      required: "O",
      repeat: "1",
    },
    "IN1.14": {
      name: "Authorization Information",
      required: "O",
      repeat: "1",
    },
    "IN1.15": {
      name: "Plan Type",
      required: "O",
      repeat: "1",
    },
    "IN1.16": {
      name: "Name Of Insured",
      required: "O",
      repeat: "∞",
    },
    "IN1.17": {
      name: "Insured's Relationship To Patient",
      required: "O",
      repeat: "1",
    },
    "IN1.18": {
      name: "Insured's Date Of Birth",
      required: "O",
      repeat: "1",
    },
    "IN1.19": {
      name: "Insured's Address",
      required: "O",
      repeat: "∞",
    },
    "IN1.20": {
      name: "Assignment Of Benefits",
      required: "O",
      repeat: "1",
    },
    "IN1.21": {
      name: "Coordination Of Benefits",
      required: "O",
      repeat: "1",
    },
    "IN1.22": {
      name: "Coord Of Ben. Priority",
      required: "O",
      repeat: "1",
    },
    "IN1.23": {
      name: "Notice Of Admission Flag",
      required: "O",
      repeat: "1",
    },
    "IN1.24": {
      name: "Notice Of Admission Date",
      required: "O",
      repeat: "1",
    },
    "IN1.25": {
      name: "Report Of Eligibility Flag",
      required: "O",
      repeat: "1",
    },
    "IN1.26": {
      name: "Report Of Eligibility Date",
      required: "O",
      repeat: "1",
    },
    "IN1.27": {
      name: "Release Information Code",
      required: "O",
      repeat: "1",
    },
    "IN1.28": {
      name: "Pre-Admit Cert (PAC)",
      required: "O",
      repeat: "1",
    },
    "IN1.29": {
      name: "Verification Date/Time",
      required: "O",
      repeat: "1",
    },
    "IN1.30": {
      name: "Verification By",
      required: "O",
      repeat: "∞",
    },
    "IN1.31": {
      name: "Type Of Agreement Code",
      required: "O",
      repeat: "1",
    },
    "IN1.32": {
      name: "Billing Status",
      required: "O",
      repeat: "1",
    },
    "IN1.33": {
      name: "Lifetime Reserve Days",
      required: "O",
      repeat: "1",
    },
    "IN1.34": {
      name: "Delay Before L.R. Day",
      required: "O",
      repeat: "1",
    },
    "IN1.35": {
      name: "Company Plan Code",
      required: "O",
      repeat: "1",
    },
    "IN1.36": {
      name: "Policy Number",
      required: "O",
      repeat: "1",
    },
    "IN1.37": {
      name: "Policy Deductible",
      required: "O",
      repeat: "1",
    },
    "IN1.38": {
      name: "Policy Limit - Amount",
      required: "B",
      repeat: "1",
    },
    "IN1.39": {
      name: "Policy Limit - Days",
      required: "O",
      repeat: "1",
    },
    "IN1.40": {
      name: "Room Rate - Semi-Private",
      required: "B",
      repeat: "1",
    },
    "IN1.41": {
      name: "Room Rate - Private",
      required: "B",
      repeat: "1",
    },
    "IN1.42": {
      name: "Insured's Employment Status",
      required: "O",
      repeat: "1",
    },
    "IN1.43": {
      name: "Insured's Administrative Sex",
      required: "O",
      repeat: "1",
    },
    "IN1.44": {
      name: "Insured's Employer's Address",
      required: "O",
      repeat: "∞",
    },
    "IN1.45": {
      name: "Verification Status",
      required: "O",
      repeat: "1",
    },
    "IN1.46": {
      name: "Prior Insurance Plan ID",
      required: "O",
      repeat: "1",
    },
    "IN1.47": {
      name: "Coverage Type",
      required: "O",
      repeat: "1",
    },
    "IN1.48": {
      name: "Handicap",
      required: "O",
      repeat: "1",
    },
    "IN1.49": {
      name: "Insured's ID Number",
      required: "O",
      repeat: "∞",
    },
    "IN1.50": {
      name: "Signature Code",
      required: "O",
      repeat: "1",
    },
    "IN1.51": {
      name: "Signature Code Date",
      required: "O",
      repeat: "1",
    },
    "IN1.52": {
      name: "Insured's Birth Place",
      required: "O",
      repeat: "1",
    },
    "IN1.53": {
      name: "VIP Indicator",
      required: "O",
      repeat: "1",
    },
  },
  IN2: {
    "IN2.1": {
      name: "Insured's Employee ID",
      required: "O",
      repeat: "∞",
    },
    "IN2.2": {
      name: "Insured's Social Security Number",
      required: "O",
      repeat: "1",
    },
    "IN2.3": {
      name: "Insured's Employer's Name and ID",
      required: "O",
      repeat: "∞",
    },
    "IN2.4": {
      name: "Employer Information Data",
      required: "O",
      repeat: "1",
    },
    "IN2.5": {
      name: "Mail Claim Party",
      required: "O",
      repeat: "∞",
    },
    "IN2.6": {
      name: "Medicare Health Ins Card Number",
      required: "O",
      repeat: "1",
    },
    "IN2.7": {
      name: "Medicaid Case Name",
      required: "O",
      repeat: "∞",
    },
    "IN2.8": {
      name: "Medicaid Case Number",
      required: "O",
      repeat: "1",
    },
    "IN2.9": {
      name: "Military Sponsor Name",
      required: "O",
      repeat: "∞",
    },
    "IN2.10": {
      name: "Military ID Number",
      required: "O",
      repeat: "1",
    },
    "IN2.11": {
      name: "Dependent Of Military Recipient",
      required: "O",
      repeat: "1",
    },
    "IN2.12": {
      name: "Military Organization",
      required: "O",
      repeat: "1",
    },
    "IN2.13": {
      name: "Military Station",
      required: "O",
      repeat: "1",
    },
    "IN2.14": {
      name: "Military Service",
      required: "O",
      repeat: "1",
    },
    "IN2.15": {
      name: "Military Rank/Grade",
      required: "O",
      repeat: "1",
    },
    "IN2.16": {
      name: "Military Status",
      required: "O",
      repeat: "1",
    },
    "IN2.17": {
      name: "Military Retire Date",
      required: "O",
      repeat: "1",
    },
    "IN2.18": {
      name: "Military Non-Avail Cert On File",
      required: "O",
      repeat: "1",
    },
    "IN2.19": {
      name: "Baby Coverage",
      required: "O",
      repeat: "1",
    },
    "IN2.20": {
      name: "Combine Baby Bill",
      required: "O",
      repeat: "1",
    },
    "IN2.21": {
      name: "Blood Deductible",
      required: "O",
      repeat: "1",
    },
    "IN2.22": {
      name: "Special Coverage Approval Name",
      required: "O",
      repeat: "∞",
    },
    "IN2.23": {
      name: "Special Coverage Approval Title",
      required: "O",
      repeat: "1",
    },
    "IN2.24": {
      name: "Non-Covered Insurance Code",
      required: "O",
      repeat: "∞",
    },
    "IN2.25": {
      name: "Payor ID",
      required: "O",
      repeat: "∞",
    },
    "IN2.26": {
      name: "Payor Subscriber ID",
      required: "O",
      repeat: "∞",
    },
    "IN2.27": {
      name: "Eligibility Source",
      required: "O",
      repeat: "1",
    },
    "IN2.28": {
      name: "Room Coverage Type/Amount",
      required: "O",
      repeat: "∞",
    },
    "IN2.29": {
      name: "Policy Type/Amount",
      required: "O",
      repeat: "∞",
    },
    "IN2.30": {
      name: "Daily Deductible",
      required: "O",
      repeat: "1",
    },
    "IN2.31": {
      name: "Living Dependency",
      required: "O",
      repeat: "1",
    },
    "IN2.32": {
      name: "Ambulatory Status",
      required: "O",
      repeat: "∞",
    },
    "IN2.33": {
      name: "Citizenship",
      required: "O",
      repeat: "∞",
    },
    "IN2.34": {
      name: "Primary Language",
      required: "O",
      repeat: "1",
    },
    "IN2.35": {
      name: "Living Arrangement",
      required: "O",
      repeat: "1",
    },
    "IN2.36": {
      name: "Publicity Code",
      required: "O",
      repeat: "1",
    },
    "IN2.37": {
      name: "Protection Indicator",
      required: "O",
      repeat: "1",
    },
    "IN2.38": {
      name: "Student Indicator",
      required: "O",
      repeat: "1",
    },
    "IN2.39": {
      name: "Religion",
      required: "O",
      repeat: "1",
    },
    "IN2.40": {
      name: "Mother's Maiden Name",
      required: "O",
      repeat: "∞",
    },
    "IN2.41": {
      name: "Nationality",
      required: "O",
      repeat: "1",
    },
    "IN2.42": {
      name: "Ethnic Group",
      required: "O",
      repeat: "∞",
    },
    "IN2.43": {
      name: "Marital Status",
      required: "O",
      repeat: "∞",
    },
    "IN2.44": {
      name: "Insured's Employment Start Date",
      required: "O",
      repeat: "1",
    },
    "IN2.45": {
      name: "Employment Stop Date",
      required: "O",
      repeat: "1",
    },
    "IN2.46": {
      name: "Job Title",
      required: "O",
      repeat: "1",
    },
    "IN2.47": {
      name: "Job Code/Class",
      required: "O",
      repeat: "1",
    },
    "IN2.48": {
      name: "Job Status",
      required: "O",
      repeat: "1",
    },
    "IN2.49": {
      name: "Employer Contact Person Name",
      required: "O",
      repeat: "∞",
    },
    "IN2.50": {
      name: "Employer Contact Person Phone Number",
      required: "O",
      repeat: "∞",
    },
    "IN2.51": {
      name: "Employer Contact Reason",
      required: "O",
      repeat: "1",
    },
    "IN2.52": {
      name: "Insured's Contact Person's Name",
      required: "O",
      repeat: "∞",
    },
    "IN2.53": {
      name: "Insured's Contact Person Phone Number",
      required: "O",
      repeat: "∞",
    },
    "IN2.54": {
      name: "Insured's Contact Person Reason",
      required: "O",
      repeat: "∞",
    },
    "IN2.55": {
      name: "Relationship to the Patient Start Date",
      required: "O",
      repeat: "1",
    },
    "IN2.56": {
      name: "Relationship to the Patient Stop Date",
      required: "O",
      repeat: "∞",
    },
    "IN2.57": {
      name: "Insurance Co. Contact Reason",
      required: "O",
      repeat: "1",
    },
    "IN2.58": {
      name: "Insurance Co Contact Phone Number",
      required: "O",
      repeat: "1",
    },
    "IN2.59": {
      name: "Policy Scope",
      required: "O",
      repeat: "1",
    },
    "IN2.60": {
      name: "Policy Source",
      required: "O",
      repeat: "1",
    },
    "IN2.61": {
      name: "Patient Member Number",
      required: "O",
      repeat: "1",
    },
    "IN2.62": {
      name: "Guarantor's Relationship To Insured",
      required: "O",
      repeat: "1",
    },
    "IN2.63": {
      name: "Insured's Phone Number - Home",
      required: "O",
      repeat: "∞",
    },
    "IN2.64": {
      name: "Insured's Employer Phone Number",
      required: "O",
      repeat: "∞",
    },
    "IN2.65": {
      name: "Military Handicapped Program",
      required: "O",
      repeat: "1",
    },
    "IN2.66": {
      name: "Suspend Flag",
      required: "O",
      repeat: "1",
    },
    "IN2.67": {
      name: "Copay Limit Flag",
      required: "O",
      repeat: "1",
    },
    "IN2.68": {
      name: "Stoploss Limit Flag",
      required: "O",
      repeat: "1",
    },
    "IN2.69": {
      name: "Insured Organization Name and ID",
      required: "O",
      repeat: "∞",
    },
    "IN2.70": {
      name: "Insured Employer Organization Name and ID",
      required: "O",
      repeat: "∞",
    },
    "IN2.71": {
      name: "Race",
      required: "O",
      repeat: "∞",
    },
    "IN2.72": {
      name: "CMS Patient's Relationship to Insured",
      required: "O",
      repeat: "1",
    },
  },
  IN3: {
    "IN3.1": {
      name: "Set ID - IN3",
      required: "R",
      repeat: "1",
    },
    "IN3.2": {
      name: "Certification Number",
      required: "O",
      repeat: "1",
    },
    "IN3.3": {
      name: "Certified By",
      required: "O",
      repeat: "∞",
    },
    "IN3.4": {
      name: "Certification Required",
      required: "O",
      repeat: "1",
    },
    "IN3.5": {
      name: "Penalty",
      required: "O",
      repeat: "1",
    },
    "IN3.6": {
      name: "Certification Date/Time",
      required: "O",
      repeat: "1",
    },
    "IN3.7": {
      name: "Certification Modify Date/Time",
      required: "O",
      repeat: "1",
    },
    "IN3.8": {
      name: "Operator",
      required: "O",
      repeat: "∞",
    },
    "IN3.9": {
      name: "Certification Begin Date",
      required: "O",
      repeat: "1",
    },
    "IN3.10": {
      name: "Certification End Date",
      required: "O",
      repeat: "1",
    },
    "IN3.11": {
      name: "Days",
      required: "O",
      repeat: "1",
    },
    "IN3.12": {
      name: "Non-Concur Code/Description",
      required: "O",
      repeat: "1",
    },
    "IN3.13": {
      name: "Non-Concur Effective Date/Time",
      required: "O",
      repeat: "1",
    },
    "IN3.14": {
      name: "Physician Reviewer",
      required: "O",
      repeat: "∞",
    },
    "IN3.15": {
      name: "Certification Contact",
      required: "O",
      repeat: "1",
    },
    "IN3.16": {
      name: "Certification Contact Phone Number",
      required: "O",
      repeat: "∞",
    },
    "IN3.17": {
      name: "Appeal Reason",
      required: "O",
      repeat: "1",
    },
    "IN3.18": {
      name: "Certification Agency",
      required: "O",
      repeat: "1",
    },
    "IN3.19": {
      name: "Certification Agency Phone Number",
      required: "O",
      repeat: "∞",
    },
    "IN3.20": {
      name: "Pre-Certification Requirement",
      required: "O",
      repeat: "∞",
    },
    "IN3.21": {
      name: "Case Manager",
      required: "O",
      repeat: "1",
    },
    "IN3.22": {
      name: "Second Opinion Date",
      required: "O",
      repeat: "1",
    },
    "IN3.23": {
      name: "Second Opinion Status",
      required: "O",
      repeat: "1",
    },
    "IN3.24": {
      name: "Second Opinion Documentation Received",
      required: "O",
      repeat: "∞",
    },
    "IN3.25": {
      name: "Second Opinion Physician",
      required: "O",
      repeat: "∞",
    },
  },
  INV: {
    "INV.1": {
      name: "Substance Identifier",
      required: "R",
      repeat: "1",
    },
    "INV.2": {
      name: "Substance Status",
      required: "R",
      repeat: "∞",
    },
    "INV.3": {
      name: "Substance Type",
      required: "O",
      repeat: "1",
    },
    "INV.4": {
      name: "Inventory Container Identifier",
      required: "O",
      repeat: "1",
    },
    "INV.5": {
      name: "Container Carrier Identifier",
      required: "O",
      repeat: "1",
    },
    "INV.6": {
      name: "Position on Carrier",
      required: "O",
      repeat: "1",
    },
    "INV.7": {
      name: "Initial Quantity",
      required: "O",
      repeat: "1",
    },
    "INV.8": {
      name: "Current Quantity",
      required: "O",
      repeat: "1",
    },
    "INV.9": {
      name: "Available Quantity",
      required: "O",
      repeat: "1",
    },
    "INV.10": {
      name: "Consumption Quantity",
      required: "O",
      repeat: "1",
    },
    "INV.11": {
      name: "Quantity Units",
      required: "O",
      repeat: "1",
    },
    "INV.12": {
      name: "Expiration Date/Time",
      required: "O",
      repeat: "1",
    },
    "INV.13": {
      name: "First Used Date/Time",
      required: "O",
      repeat: "1",
    },
    "INV.14": {
      name: "On Board Stability Duration",
      required: "B",
      repeat: "1",
    },
    "INV.15": {
      name: "Test/Fluid Identifier(s)",
      required: "O",
      repeat: "∞",
    },
    "INV.16": {
      name: "Manufacturer Lot Number",
      required: "O",
      repeat: "1",
    },
    "INV.17": {
      name: "Manufacturer Identifier",
      required: "O",
      repeat: "1",
    },
    "INV.18": {
      name: "Supplier Identifier",
      required: "O",
      repeat: "1",
    },
    "INV.19": {
      name: "On Board Stability Time",
      required: "O",
      repeat: "1",
    },
    "INV.20": {
      name: "Target Value",
      required: "O",
      repeat: "1",
    },
  },
  IPC: {
    "IPC.1": {
      name: "Accession Identifier",
      required: "R",
      repeat: "1",
    },
    "IPC.2": {
      name: "Requested Procedure ID",
      required: "R",
      repeat: "1",
    },
    "IPC.3": {
      name: "Study Instance UID",
      required: "R",
      repeat: "1",
    },
    "IPC.4": {
      name: "Scheduled Procedure Step ID",
      required: "R",
      repeat: "1",
    },
    "IPC.5": {
      name: "Modality",
      required: "O",
      repeat: "1",
    },
    "IPC.6": {
      name: "Protocol Code",
      required: "O",
      repeat: "∞",
    },
    "IPC.7": {
      name: "Scheduled Station Name",
      required: "O",
      repeat: "1",
    },
    "IPC.8": {
      name: "Scheduled Procedure Step Location",
      required: "O",
      repeat: "∞",
    },
    "IPC.9": {
      name: "Scheduled AE Title",
      required: "O",
      repeat: "1",
    },
  },
  ISD: {
    "ISD.1": {
      name: "Reference Interaction Number (unique identifier)",
      required: "R",
      repeat: "1",
    },
    "ISD.2": {
      name: "Interaction Type Identifier",
      required: "O",
      repeat: "1",
    },
    "ISD.3": {
      name: "Interaction Active State",
      required: "R",
      repeat: "1",
    },
  },
  LAN: {
    "LAN.1": {
      name: "Set ID - LAN",
      required: "R",
      repeat: "1",
    },
    "LAN.2": {
      name: "Language Code",
      required: "R",
      repeat: "1",
    },
    "LAN.3": {
      name: "Language Ability Code",
      required: "O",
      repeat: "∞",
    },
    "LAN.4": {
      name: "Language Proficiency Code",
      required: "O",
      repeat: "1",
    },
  },
  LCC: {
    "LCC.1": {
      name: "Primary Key Value - LCC",
      required: "R",
      repeat: "1",
    },
    "LCC.2": {
      name: "Location Department",
      required: "R",
      repeat: "1",
    },
    "LCC.3": {
      name: "Accommodation Type",
      required: "O",
      repeat: "∞",
    },
    "LCC.4": {
      name: "Charge Code",
      required: "R",
      repeat: "∞",
    },
  },
  LCH: {
    "LCH.1": {
      name: "Primary Key Value - LCH",
      required: "R",
      repeat: "1",
    },
    "LCH.2": {
      name: "Segment Action Code",
      required: "O",
      repeat: "1",
    },
    "LCH.3": {
      name: "Segment Unique Key",
      required: "O",
      repeat: "1",
    },
    "LCH.4": {
      name: "Location Characteristic ID",
      required: "R",
      repeat: "1",
    },
    "LCH.5": {
      name: "Location Characteristic Value-LCH",
      required: "R",
      repeat: "1",
    },
  },
  LDP: {
    "LDP.1": {
      name: "Primary Key Value - LDP",
      required: "R",
      repeat: "1",
    },
    "LDP.2": {
      name: "Location Department",
      required: "R",
      repeat: "1",
    },
    "LDP.3": {
      name: "Location Service",
      required: "O",
      repeat: "∞",
    },
    "LDP.4": {
      name: "Specialty Type",
      required: "O",
      repeat: "∞",
    },
    "LDP.5": {
      name: "Valid Patient Classes",
      required: "O",
      repeat: "∞",
    },
    "LDP.6": {
      name: "Active/Inactive Flag",
      required: "O",
      repeat: "1",
    },
    "LDP.7": {
      name: "Activation Date - LDP",
      required: "O",
      repeat: "1",
    },
    "LDP.8": {
      name: "Inactivation Date - LDP",
      required: "O",
      repeat: "1",
    },
    "LDP.9": {
      name: "Inactivated Reason",
      required: "O",
      repeat: "1",
    },
    "LDP.10": {
      name: "Visiting Hours",
      required: "O",
      repeat: "∞",
    },
    "LDP.11": {
      name: "Contact Phone",
      required: "O",
      repeat: "1",
    },
    "LDP.12": {
      name: "Location Cost Center",
      required: "O",
      repeat: "1",
    },
  },
  LOC: {
    "LOC.1": {
      name: "Primary Key Value - LOC",
      required: "R",
      repeat: "1",
    },
    "LOC.2": {
      name: "Location Description",
      required: "O",
      repeat: "1",
    },
    "LOC.3": {
      name: "Location Type - LOC",
      required: "R",
      repeat: "∞",
    },
    "LOC.4": {
      name: "Organization Name - LOC",
      required: "O",
      repeat: "∞",
    },
    "LOC.5": {
      name: "Location Address",
      required: "O",
      repeat: "∞",
    },
    "LOC.6": {
      name: "Location Phone",
      required: "O",
      repeat: "∞",
    },
    "LOC.7": {
      name: "License Number",
      required: "O",
      repeat: "∞",
    },
    "LOC.8": {
      name: "Location Equipment",
      required: "O",
      repeat: "∞",
    },
    "LOC.9": {
      name: "Location Service Code",
      required: "O",
      repeat: "1",
    },
  },
  LRL: {
    "LRL.1": {
      name: "Primary Key Value - LRL",
      required: "R",
      repeat: "1",
    },
    "LRL.2": {
      name: "Segment Action Code",
      required: "O",
      repeat: "1",
    },
    "LRL.3": {
      name: "Segment Unique Key",
      required: "O",
      repeat: "1",
    },
    "LRL.4": {
      name: "Location Relationship ID",
      required: "R",
      repeat: "1",
    },
    "LRL.5": {
      name: "Organizational Location Relationship Value",
      required: "C",
      repeat: "∞",
    },
    "LRL.6": {
      name: "Patient Location Relationship Value",
      required: "C",
      repeat: "1",
    },
  },
  MFA: {
    "MFA.1": {
      name: "Record-Level Event Code",
      required: "R",
      repeat: "1",
    },
    "MFA.2": {
      name: "MFN Control ID",
      required: "C",
      repeat: "1",
    },
    "MFA.3": {
      name: "Event Completion Date/Time",
      required: "O",
      repeat: "1",
    },
    "MFA.4": {
      name: "MFN Record Level Error Return",
      required: "R",
      repeat: "1",
    },
    "MFA.5": {
      name: "Primary Key Value - MFA",
      required: "R",
      repeat: "∞",
    },
    "MFA.6": {
      name: "Primary Key Value Type - MFA",
      required: "R",
      repeat: "∞",
    },
  },
  MFE: {
    "MFE.1": {
      name: "Record-Level Event Code",
      required: "R",
      repeat: "1",
    },
    "MFE.2": {
      name: "MFN Control ID",
      required: "C",
      repeat: "1",
    },
    "MFE.3": {
      name: "Effective Date/Time",
      required: "O",
      repeat: "1",
    },
    "MFE.4": {
      name: "Primary Key Value - MFE",
      required: "R",
      repeat: "∞",
    },
    "MFE.5": {
      name: "Primary Key Value Type",
      required: "R",
      repeat: "∞",
    },
  },
  MFI: {
    "MFI.1": {
      name: "Master File Identifier",
      required: "R",
      repeat: "1",
    },
    "MFI.2": {
      name: "Master File Application Identifier",
      required: "O",
      repeat: "1",
    },
    "MFI.3": {
      name: "File-Level Event Code",
      required: "R",
      repeat: "1",
    },
    "MFI.4": {
      name: "Entered Date/Time",
      required: "O",
      repeat: "1",
    },
    "MFI.5": {
      name: "Effective Date/Time",
      required: "O",
      repeat: "1",
    },
    "MFI.6": {
      name: "Response Level Code",
      required: "R",
      repeat: "1",
    },
  },
  MRG: {
    "MRG.1": {
      name: "Prior Patient Identifier List",
      required: "R",
      repeat: "∞",
    },
    "MRG.2": {
      name: "Prior Alternate Patient ID",
      required: "B",
      repeat: "∞",
    },
    "MRG.3": {
      name: "Prior Patient Account Number",
      required: "O",
      repeat: "1",
    },
    "MRG.4": {
      name: "Prior Patient ID",
      required: "B",
      repeat: "1",
    },
    "MRG.5": {
      name: "Prior Visit Number",
      required: "O",
      repeat: "1",
    },
    "MRG.6": {
      name: "Prior Alternate Visit ID",
      required: "O",
      repeat: "1",
    },
    "MRG.7": {
      name: "Prior Patient Name",
      required: "O",
      repeat: "∞",
    },
  },
  MSA: {
    "MSA.1": {
      name: "Acknowledgment Code",
      required: "R",
      repeat: "1",
    },
    "MSA.2": {
      name: "Message Control ID",
      required: "R",
      repeat: "1",
    },
    "MSA.3": {
      name: "Text Message",
      required: "B",
      repeat: "1",
    },
    "MSA.4": {
      name: "Expected Sequence Number",
      required: "O",
      repeat: "1",
    },
    "MSA.5": {
      name: "Delayed Acknowledgment Type",
      required: "W",
      repeat: "1",
    },
    "MSA.6": {
      name: "Error Condition",
      required: "B",
      repeat: "1",
    },
  },
  MSH: {
    "MSH.1": {
      name: "Field Separator",
      required: "R",
      repeat: "1",
    },
    "MSH.2": {
      name: "Encoding Characters",
      required: "R",
      repeat: "1",
    },
    "MSH.3": {
      name: "Sending Application",
      required: "O",
      repeat: "1",
    },
    "MSH.4": {
      name: "Sending Facility",
      required: "O",
      repeat: "1",
    },
    "MSH.5": {
      name: "Receiving Application",
      required: "O",
      repeat: "1",
    },
    "MSH.6": {
      name: "Receiving Facility",
      required: "O",
      repeat: "1",
    },
    "MSH.7": {
      name: "Date/Time Of Message",
      required: "R",
      repeat: "1",
    },
    "MSH.8": {
      name: "Security",
      required: "O",
      repeat: "1",
    },
    "MSH.9": {
      name: "Message Type",
      required: "R",
      repeat: "1",
    },
    "MSH.10": {
      name: "Message Control ID",
      required: "R",
      repeat: "1",
    },
    "MSH.11": {
      name: "Processing ID",
      required: "R",
      repeat: "1",
    },
    "MSH.12": {
      name: "Version ID",
      required: "R",
      repeat: "1",
    },
    "MSH.13": {
      name: "Sequence Number",
      required: "O",
      repeat: "1",
    },
    "MSH.14": {
      name: "Continuation Pointer",
      required: "O",
      repeat: "1",
    },
    "MSH.15": {
      name: "Accept Acknowledgment Type",
      required: "O",
      repeat: "1",
    },
    "MSH.16": {
      name: "Application Acknowledgment Type",
      required: "O",
      repeat: "1",
    },
    "MSH.17": {
      name: "Country Code",
      required: "O",
      repeat: "1",
    },
    "MSH.18": {
      name: "Character Set",
      required: "O",
      repeat: "∞",
    },
    "MSH.19": {
      name: "Principal Language Of Message",
      required: "O",
      repeat: "1",
    },
    "MSH.20": {
      name: "Alternate Character Set Handling Scheme",
      required: "O",
      repeat: "1",
    },
    "MSH.21": {
      name: "Message Profile Identifier",
      required: "O",
      repeat: "∞",
    },
  },
  NCK: {
    "NCK.1": {
      name: "System Date/Time",
      required: "R",
      repeat: "1",
    },
  },
  NDS: {
    "NDS.1": {
      name: "Notification Reference Number",
      required: "R",
      repeat: "1",
    },
    "NDS.2": {
      name: "Notification Date/Time",
      required: "R",
      repeat: "1",
    },
    "NDS.3": {
      name: "Notification Alert Severity",
      required: "R",
      repeat: "1",
    },
    "NDS.4": {
      name: "Notification Code",
      required: "R",
      repeat: "1",
    },
  },
  NK1: {
    "NK1.1": {
      name: "Set ID - NK1",
      required: "R",
      repeat: "1",
    },
    "NK1.2": {
      name: "NK Name",
      required: "O",
      repeat: "∞",
    },
    "NK1.3": {
      name: "Relationship",
      required: "O",
      repeat: "1",
    },
    "NK1.4": {
      name: "Address",
      required: "O",
      repeat: "∞",
    },
    "NK1.5": {
      name: "Phone Number",
      required: "O",
      repeat: "∞",
    },
    "NK1.6": {
      name: "Business Phone Number",
      required: "O",
      repeat: "∞",
    },
    "NK1.7": {
      name: "Contact Role",
      required: "O",
      repeat: "1",
    },
    "NK1.8": {
      name: "Start Date",
      required: "O",
      repeat: "1",
    },
    "NK1.9": {
      name: "End Date",
      required: "O",
      repeat: "1",
    },
    "NK1.10": {
      name: "Next of Kin / Associated Parties Job Title",
      required: "O",
      repeat: "1",
    },
    "NK1.11": {
      name: "Next of Kin / Associated Parties Job Code/Class",
      required: "O",
      repeat: "1",
    },
    "NK1.12": {
      name: "Next of Kin / Associated Parties Employee Number",
      required: "O",
      repeat: "1",
    },
    "NK1.13": {
      name: "Organization Name - NK1",
      required: "O",
      repeat: "∞",
    },
    "NK1.14": {
      name: "Marital Status",
      required: "O",
      repeat: "1",
    },
    "NK1.15": {
      name: "Administrative Sex",
      required: "O",
      repeat: "1",
    },
    "NK1.16": {
      name: "Date/Time of Birth",
      required: "O",
      repeat: "1",
    },
    "NK1.17": {
      name: "Living Dependency",
      required: "O",
      repeat: "∞",
    },
    "NK1.18": {
      name: "Ambulatory Status",
      required: "O",
      repeat: "∞",
    },
    "NK1.19": {
      name: "Citizenship",
      required: "O",
      repeat: "∞",
    },
    "NK1.20": {
      name: "Primary Language",
      required: "O",
      repeat: "1",
    },
    "NK1.21": {
      name: "Living Arrangement",
      required: "O",
      repeat: "1",
    },
    "NK1.22": {
      name: "Publicity Code",
      required: "O",
      repeat: "1",
    },
    "NK1.23": {
      name: "Protection Indicator",
      required: "O",
      repeat: "1",
    },
    "NK1.24": {
      name: "Student Indicator",
      required: "O",
      repeat: "1",
    },
    "NK1.25": {
      name: "Religion",
      required: "O",
      repeat: "1",
    },
    "NK1.26": {
      name: "Mother's Maiden Name",
      required: "O",
      repeat: "∞",
    },
    "NK1.27": {
      name: "Nationality",
      required: "O",
      repeat: "1",
    },
    "NK1.28": {
      name: "Ethnic Group",
      required: "O",
      repeat: "∞",
    },
    "NK1.29": {
      name: "Contact Reason",
      required: "O",
      repeat: "∞",
    },
    "NK1.30": {
      name: "Contact Person's Name",
      required: "O",
      repeat: "∞",
    },
    "NK1.31": {
      name: "Contact Person's Telephone Number",
      required: "O",
      repeat: "∞",
    },
    "NK1.32": {
      name: "Contact Person's Address",
      required: "O",
      repeat: "∞",
    },
    "NK1.33": {
      name: "Next of Kin/Associated Party's Identifiers",
      required: "O",
      repeat: "∞",
    },
    "NK1.34": {
      name: "Job Status",
      required: "O",
      repeat: "1",
    },
    "NK1.35": {
      name: "Race",
      required: "O",
      repeat: "∞",
    },
    "NK1.36": {
      name: "Handicap",
      required: "O",
      repeat: "1",
    },
    "NK1.37": {
      name: "Contact Person Social Security Number",
      required: "O",
      repeat: "1",
    },
    "NK1.38": {
      name: "Next of Kin Birth Place",
      required: "O",
      repeat: "1",
    },
    "NK1.39": {
      name: "VIP Indicator",
      required: "O",
      repeat: "1",
    },
  },
  NPU: {
    "NPU.1": {
      name: "Bed Location",
      required: "R",
      repeat: "1",
    },
    "NPU.2": {
      name: "Bed Status",
      required: "O",
      repeat: "1",
    },
  },
  NSC: {
    "NSC.1": {
      name: "Application Change Type",
      required: "R",
      repeat: "1",
    },
    "NSC.2": {
      name: "Current CPU",
      required: "O",
      repeat: "1",
    },
    "NSC.3": {
      name: "Current Fileserver",
      required: "O",
      repeat: "1",
    },
    "NSC.4": {
      name: "Current Application",
      required: "O",
      repeat: "1",
    },
    "NSC.5": {
      name: "Current Facility",
      required: "O",
      repeat: "1",
    },
    "NSC.6": {
      name: "New CPU",
      required: "O",
      repeat: "1",
    },
    "NSC.7": {
      name: "New Fileserver",
      required: "O",
      repeat: "1",
    },
    "NSC.8": {
      name: "New Application",
      required: "O",
      repeat: "1",
    },
    "NSC.9": {
      name: "New Facility",
      required: "O",
      repeat: "1",
    },
  },
  NST: {
    "NST.1": {
      name: "Statistics Available",
      required: "R",
      repeat: "1",
    },
    "NST.2": {
      name: "Source Identifier",
      required: "O",
      repeat: "1",
    },
    "NST.3": {
      name: "Source Type",
      required: "O",
      repeat: "1",
    },
    "NST.4": {
      name: "Statistics Start",
      required: "O",
      repeat: "1",
    },
    "NST.5": {
      name: "Statistics End",
      required: "O",
      repeat: "1",
    },
    "NST.6": {
      name: "Receive Character Count",
      required: "O",
      repeat: "1",
    },
    "NST.7": {
      name: "Send Character Count",
      required: "O",
      repeat: "1",
    },
    "NST.8": {
      name: "Messages Received",
      required: "O",
      repeat: "1",
    },
    "NST.9": {
      name: "Messages Sent",
      required: "O",
      repeat: "1",
    },
    "NST.10": {
      name: "Checksum Errors Received",
      required: "O",
      repeat: "1",
    },
    "NST.11": {
      name: "Length Errors Received",
      required: "O",
      repeat: "1",
    },
    "NST.12": {
      name: "Other Errors Received",
      required: "O",
      repeat: "1",
    },
    "NST.13": {
      name: "Connect Timeouts",
      required: "O",
      repeat: "1",
    },
    "NST.14": {
      name: "Receive Timeouts",
      required: "O",
      repeat: "1",
    },
    "NST.15": {
      name: "Application control-level Errors",
      required: "O",
      repeat: "1",
    },
  },
  NTE: {
    "NTE.1": {
      name: "Set ID - NTE",
      required: "O",
      repeat: "1",
    },
    "NTE.2": {
      name: "Source of Comment",
      required: "O",
      repeat: "1",
    },
    "NTE.3": {
      name: "Comment",
      required: "O",
      repeat: "∞",
    },
    "NTE.4": {
      name: "Comment Type",
      required: "O",
      repeat: "1",
    },
  },
  OBR: {
    "OBR.1": {
      name: "Set ID - OBR",
      required: "O",
      repeat: "1",
    },
    "OBR.2": {
      name: "Placer Order Number",
      required: "C",
      repeat: "1",
    },
    "OBR.3": {
      name: "Filler Order Number",
      required: "C",
      repeat: "1",
    },
    "OBR.4": {
      name: "Universal Service Identifier",
      required: "R",
      repeat: "1",
    },
    "OBR.5": {
      name: "Priority - OBR",
      required: "B",
      repeat: "1",
    },
    "OBR.6": {
      name: "Requested Date/Time",
      required: "B",
      repeat: "1",
    },
    "OBR.7": {
      name: "Observation Date/Time",
      required: "C",
      repeat: "1",
    },
    "OBR.8": {
      name: "Observation End Date/Time",
      required: "O",
      repeat: "1",
    },
    "OBR.9": {
      name: "Collection Volume",
      required: "O",
      repeat: "1",
    },
    "OBR.10": {
      name: "Collector Identifier",
      required: "O",
      repeat: "∞",
    },
    "OBR.11": {
      name: "Specimen Action Code",
      required: "O",
      repeat: "1",
    },
    "OBR.12": {
      name: "Danger Code",
      required: "O",
      repeat: "1",
    },
    "OBR.13": {
      name: "Relevant Clinical Information",
      required: "O",
      repeat: "1",
    },
    "OBR.14": {
      name: "Specimen Received Date/Time",
      required: "B",
      repeat: "1",
    },
    "OBR.15": {
      name: "Specimen Source",
      required: "B",
      repeat: "1",
    },
    "OBR.16": {
      name: "Ordering Provider",
      required: "O",
      repeat: "∞",
    },
    "OBR.17": {
      name: "Order Callback Phone Number",
      required: "O",
      repeat: "2",
    },
    "OBR.18": {
      name: "Placer Field 1",
      required: "O",
      repeat: "1",
    },
    "OBR.19": {
      name: "Placer Field 2",
      required: "O",
      repeat: "1",
    },
    "OBR.20": {
      name: "Filler Field 1",
      required: "O",
      repeat: "1",
    },
    "OBR.21": {
      name: "Filler Field 2",
      required: "O",
      repeat: "1",
    },
    "OBR.22": {
      name: "Results Rpt/Status Chng - Date/Time",
      required: "C",
      repeat: "1",
    },
    "OBR.23": {
      name: "Charge to Practice",
      required: "O",
      repeat: "1",
    },
    "OBR.24": {
      name: "Diagnostic Serv Sect ID",
      required: "O",
      repeat: "1",
    },
    "OBR.25": {
      name: "Result Status",
      required: "C",
      repeat: "1",
    },
    "OBR.26": {
      name: "Parent Result",
      required: "O",
      repeat: "1",
    },
    "OBR.27": {
      name: "Quantity/Timing",
      required: "B",
      repeat: "∞",
    },
    "OBR.28": {
      name: "Result Copies To",
      required: "O",
      repeat: "∞",
    },
    "OBR.29": {
      name: "Parent",
      required: "O",
      repeat: "1",
    },
    "OBR.30": {
      name: "Transportation Mode",
      required: "O",
      repeat: "1",
    },
    "OBR.31": {
      name: "Reason for Study",
      required: "O",
      repeat: "∞",
    },
    "OBR.32": {
      name: "Principal Result Interpreter",
      required: "O",
      repeat: "1",
    },
    "OBR.33": {
      name: "Assistant Result Interpreter",
      required: "O",
      repeat: "∞",
    },
    "OBR.34": {
      name: "Technician",
      required: "O",
      repeat: "∞",
    },
    "OBR.35": {
      name: "Transcriptionist",
      required: "O",
      repeat: "∞",
    },
    "OBR.36": {
      name: "Scheduled Date/Time",
      required: "O",
      repeat: "1",
    },
    "OBR.37": {
      name: "Number of Sample Containers",
      required: "O",
      repeat: "1",
    },
    "OBR.38": {
      name: "Transport Logistics of Collected Sample",
      required: "O",
      repeat: "∞",
    },
    "OBR.39": {
      name: "Collector's Comment",
      required: "O",
      repeat: "∞",
    },
    "OBR.40": {
      name: "Transport Arrangement Responsibility",
      required: "O",
      repeat: "1",
    },
    "OBR.41": {
      name: "Transport Arranged",
      required: "O",
      repeat: "1",
    },
    "OBR.42": {
      name: "Escort Required",
      required: "O",
      repeat: "1",
    },
    "OBR.43": {
      name: "Planned Patient Transport Comment",
      required: "O",
      repeat: "∞",
    },
    "OBR.44": {
      name: "Procedure Code",
      required: "O",
      repeat: "1",
    },
    "OBR.45": {
      name: "Procedure Code Modifier",
      required: "O",
      repeat: "∞",
    },
    "OBR.46": {
      name: "Placer Supplemental Service Information",
      required: "O",
      repeat: "∞",
    },
    "OBR.47": {
      name: "Filler Supplemental Service Information",
      required: "O",
      repeat: "∞",
    },
    "OBR.48": {
      name: "Medically Necessary Duplicate Procedure Reason.",
      required: "C",
      repeat: "1",
    },
    "OBR.49": {
      name: "Result Handling",
      required: "O",
      repeat: "1",
    },
    "OBR.50": {
      name: "Parent Universal Service Identifier",
      required: "O",
      repeat: "1",
    },
  },
  OBX: {
    "OBX.1": {
      name: "Set ID - OBX",
      required: "O",
      repeat: "1",
    },
    "OBX.2": {
      name: "Value Type",
      required: "C",
      repeat: "1",
    },
    "OBX.3": {
      name: "Observation Identifier",
      required: "R",
      repeat: "1",
    },
    "OBX.4": {
      name: "Observation Sub-ID",
      required: "C",
      repeat: "1",
    },
    "OBX.5": {
      name: "Observation Value",
      required: "C",
      repeat: "∞",
    },
    "OBX.6": {
      name: "Units",
      required: "O",
      repeat: "1",
    },
    "OBX.7": {
      name: "References Range",
      required: "O",
      repeat: "1",
    },
    "OBX.8": {
      name: "Abnormal Flags",
      required: "O",
      repeat: "∞",
    },
    "OBX.9": {
      name: "Probability",
      required: "O",
      repeat: "1",
    },
    "OBX.10": {
      name: "Nature of Abnormal Test",
      required: "O",
      repeat: "∞",
    },
    "OBX.11": {
      name: "Observation Result Status",
      required: "R",
      repeat: "1",
    },
    "OBX.12": {
      name: "Effective Date of Reference Range",
      required: "O",
      repeat: "1",
    },
    "OBX.13": {
      name: "User Defined Access Checks",
      required: "O",
      repeat: "1",
    },
    "OBX.14": {
      name: "Date/Time of the Observation",
      required: "O",
      repeat: "1",
    },
    "OBX.15": {
      name: "Producer's ID",
      required: "O",
      repeat: "1",
    },
    "OBX.16": {
      name: "Responsible Observer",
      required: "O",
      repeat: "∞",
    },
    "OBX.17": {
      name: "Observation Method",
      required: "O",
      repeat: "∞",
    },
    "OBX.18": {
      name: "Equipment Instance Identifier",
      required: "O",
      repeat: "∞",
    },
    "OBX.19": {
      name: "Date/Time of the Analysis",
      required: "O",
      repeat: "1",
    },
    "OBX.20": {
      name: "Reserved for harmonization with V2.6 ",
      required: "X",
      repeat: "1",
    },
    "OBX.21": {
      name: "Reserved for harmonization with V2.6",
      required: "X",
      repeat: "1",
    },
    "OBX.22": {
      name: "Reserved for harmonization with V2.6",
      required: "X",
      repeat: "1",
    },
    "OBX.23": {
      name: "Performing Organization Name",
      required: "O",
      repeat: "1",
    },
    "OBX.24": {
      name: "Performing Organization Address",
      required: "O",
      repeat: "1",
    },
    "OBX.25": {
      name: "Performing Organization Medical Director",
      required: "O",
      repeat: "1",
    },
  },
  ODS: {
    "ODS.1": {
      name: "Type",
      required: "R",
      repeat: "1",
    },
    "ODS.2": {
      name: "Service Period",
      required: "O",
      repeat: "10",
    },
    "ODS.3": {
      name: "Diet, Supplement, or Preference Code",
      required: "R",
      repeat: "20",
    },
    "ODS.4": {
      name: "Text Instruction",
      required: "O",
      repeat: "2",
    },
  },
  ODT: {
    "ODT.1": {
      name: "Tray Type",
      required: "R",
      repeat: "1",
    },
    "ODT.2": {
      name: "Service Period",
      required: "O",
      repeat: "10",
    },
    "ODT.3": {
      name: "Text Instruction",
      required: "O",
      repeat: "1",
    },
  },
  OM1: {
    "OM1.1": {
      name: "Sequence Number - Test/Observation Master File",
      required: "R",
      repeat: "1",
    },
    "OM1.2": {
      name: "Producer's Service/Test/Observation ID",
      required: "R",
      repeat: "1",
    },
    "OM1.3": {
      name: "Permitted Data Types",
      required: "O",
      repeat: "∞",
    },
    "OM1.4": {
      name: "Specimen Required",
      required: "R",
      repeat: "1",
    },
    "OM1.5": {
      name: "Producer ID",
      required: "R",
      repeat: "1",
    },
    "OM1.6": {
      name: "Observation Description",
      required: "O",
      repeat: "1",
    },
    "OM1.7": {
      name: "Other Service/Test/Observation IDs for the Observation",
      required: "O",
      repeat: "1",
    },
    "OM1.8": {
      name: "Other Names",
      required: "R",
      repeat: "∞",
    },
    "OM1.9": {
      name: "Preferred Report Name for the Observation",
      required: "O",
      repeat: "1",
    },
    "OM1.10": {
      name: "Preferred Short Name or Mnemonic for Observation",
      required: "O",
      repeat: "1",
    },
    "OM1.11": {
      name: "Preferred Long Name for the Observation",
      required: "O",
      repeat: "1",
    },
    "OM1.12": {
      name: "Orderability",
      required: "O",
      repeat: "1",
    },
    "OM1.13": {
      name: "Identity of Instrument Used to Perform this Study",
      required: "O",
      repeat: "∞",
    },
    "OM1.14": {
      name: "Coded Representation of Method",
      required: "O",
      repeat: "∞",
    },
    "OM1.15": {
      name: "Portable Device Indicator",
      required: "O",
      repeat: "1",
    },
    "OM1.16": {
      name: "Observation Producing Department/Section",
      required: "O",
      repeat: "∞",
    },
    "OM1.17": {
      name: "Telephone Number of Section",
      required: "O",
      repeat: "1",
    },
    "OM1.18": {
      name: "Nature of Service/Test/Observation",
      required: "R",
      repeat: "1",
    },
    "OM1.19": {
      name: "Report Subheader",
      required: "O",
      repeat: "1",
    },
    "OM1.20": {
      name: "Report Display Order",
      required: "O",
      repeat: "1",
    },
    "OM1.21": {
      name: "Date/Time Stamp for any change in Definition for the Observation",
      required: "O",
      repeat: "1",
    },
    "OM1.22": {
      name: "Effective Date/Time of Change",
      required: "O",
      repeat: "1",
    },
    "OM1.23": {
      name: "Typical Turn-Around Time",
      required: "O",
      repeat: "1",
    },
    "OM1.24": {
      name: "Processing Time",
      required: "O",
      repeat: "1",
    },
    "OM1.25": {
      name: "Processing Priority",
      required: "O",
      repeat: "∞",
    },
    "OM1.26": {
      name: "Reporting Priority",
      required: "O",
      repeat: "1",
    },
    "OM1.27": {
      name: "Outside Site(s) Where Observation may be Performed ",
      required: "O",
      repeat: "∞",
    },
    "OM1.28": {
      name: "Address of Outside Site(s)",
      required: "O",
      repeat: "∞",
    },
    "OM1.29": {
      name: "Phone Number of Outside Site",
      required: "O",
      repeat: "1",
    },
    "OM1.30": {
      name: "Confidentiality Code",
      required: "O",
      repeat: "1",
    },
    "OM1.31": {
      name: "Observations Required to Interpret the Observation",
      required: "O",
      repeat: "1",
    },
    "OM1.32": {
      name: "Interpretation of Observations",
      required: "O",
      repeat: "1",
    },
    "OM1.33": {
      name: "Contraindications to Observations",
      required: "O",
      repeat: "1",
    },
    "OM1.34": {
      name: "Reflex Tests/Observations",
      required: "O",
      repeat: "∞",
    },
    "OM1.35": {
      name: "Rules that Trigger Reflex Testing",
      required: "O",
      repeat: "1",
    },
    "OM1.36": {
      name: "Fixed Canned Message",
      required: "O",
      repeat: "1",
    },
    "OM1.37": {
      name: "Patient Preparation",
      required: "O",
      repeat: "1",
    },
    "OM1.38": {
      name: "Procedure Medication",
      required: "O",
      repeat: "1",
    },
    "OM1.39": {
      name: "Factors that may Affect the Observation",
      required: "O",
      repeat: "1",
    },
    "OM1.40": {
      name: "Service/Test/Observation Performance Schedule",
      required: "O",
      repeat: "∞",
    },
    "OM1.41": {
      name: "Description of Test Methods",
      required: "O",
      repeat: "1",
    },
    "OM1.42": {
      name: "Kind of Quantity Observed",
      required: "O",
      repeat: "1",
    },
    "OM1.43": {
      name: "Point Versus Interval",
      required: "O",
      repeat: "1",
    },
    "OM1.44": {
      name: "Challenge Information",
      required: "O",
      repeat: "1",
    },
    "OM1.45": {
      name: "Relationship Modifier",
      required: "O",
      repeat: "1",
    },
    "OM1.46": {
      name: "Target Anatomic Site Of Test",
      required: "O",
      repeat: "1",
    },
    "OM1.47": {
      name: "Modality Of Imaging Measurement",
      required: "O",
      repeat: "1",
    },
  },
  OM2: {
    "OM2.1": {
      name: "Sequence Number - Test/Observation Master File",
      required: "O",
      repeat: "1",
    },
    "OM2.2": {
      name: "Units of Measure",
      required: "O",
      repeat: "1",
    },
    "OM2.3": {
      name: "Range of Decimal Precision",
      required: "O",
      repeat: "∞",
    },
    "OM2.4": {
      name: "Corresponding SI Units of Measure",
      required: "O",
      repeat: "1",
    },
    "OM2.5": {
      name: "SI Conversion Factor",
      required: "O",
      repeat: "1",
    },
    "OM2.6": {
      name: "Reference (Normal) Range - Ordinal and Continuous Observations",
      required: "O",
      repeat: "∞",
    },
    "OM2.7": {
      name: "Critical Range for Ordinal and Continuous Observations",
      required: "O",
      repeat: "∞",
    },
    "OM2.8": {
      name: "Absolute Range for Ordinal and Continuous Observations",
      required: "O",
      repeat: "1",
    },
    "OM2.9": {
      name: "Delta Check Criteria",
      required: "O",
      repeat: "∞",
    },
    "OM2.10": {
      name: "Minimum Meaningful Increments",
      required: "O",
      repeat: "1",
    },
  },
  OM3: {
    "OM3.1": {
      name: "Sequence Number - Test/Observation Master File",
      required: "O",
      repeat: "1",
    },
    "OM3.2": {
      name: "Preferred Coding System",
      required: "O",
      repeat: "1",
    },
    "OM3.3": {
      name: "Valid Coded 'Answers'",
      required: "O",
      repeat: "1",
    },
    "OM3.4": {
      name: "Normal Text/Codes for Categorical Observations",
      required: "O",
      repeat: "∞",
    },
    "OM3.5": {
      name: "Abnormal Text/Codes for Categorical Observations",
      required: "O",
      repeat: "∞",
    },
    "OM3.6": {
      name: "Critical Text/Codes for Categorical Observations",
      required: "O",
      repeat: "∞",
    },
    "OM3.7": {
      name: "Value Type",
      required: "O",
      repeat: "1",
    },
  },
  OM4: {
    "OM4.1": {
      name: "Sequence Number - Test/Observation Master File",
      required: "O",
      repeat: "1",
    },
    "OM4.2": {
      name: "Derived Specimen",
      required: "O",
      repeat: "1",
    },
    "OM4.3": {
      name: "Container Description",
      required: "O",
      repeat: "1",
    },
    "OM4.4": {
      name: "Container Volume",
      required: "O",
      repeat: "1",
    },
    "OM4.5": {
      name: "Container Units",
      required: "O",
      repeat: "1",
    },
    "OM4.6": {
      name: "Specimen",
      required: "O",
      repeat: "1",
    },
    "OM4.7": {
      name: "Additive",
      required: "O",
      repeat: "1",
    },
    "OM4.8": {
      name: "Preparation",
      required: "O",
      repeat: "1",
    },
    "OM4.9": {
      name: "Special Handling Requirements",
      required: "O",
      repeat: "1",
    },
    "OM4.10": {
      name: "Normal Collection Volume",
      required: "O",
      repeat: "1",
    },
    "OM4.11": {
      name: "Minimum Collection Volume",
      required: "O",
      repeat: "1",
    },
    "OM4.12": {
      name: "Specimen Requirements",
      required: "O",
      repeat: "1",
    },
    "OM4.13": {
      name: "Specimen Priorities",
      required: "O",
      repeat: "∞",
    },
    "OM4.14": {
      name: "Specimen Retention Time",
      required: "O",
      repeat: "1",
    },
  },
  OM5: {
    "OM5.1": {
      name: "Sequence Number - Test/Observation Master File",
      required: "O",
      repeat: "1",
    },
    "OM5.2": {
      name: "Test/Observations Included within an Ordered Test Battery",
      required: "O",
      repeat: "∞",
    },
    "OM5.3": {
      name: "Observation ID Suffixes",
      required: "O",
      repeat: "1",
    },
  },
  OM6: {
    "OM6.1": {
      name: "Sequence Number - Test/Observation Master File",
      required: "O",
      repeat: "1",
    },
    "OM6.2": {
      name: "Derivation Rule",
      required: "O",
      repeat: "1",
    },
  },
  OM7: {
    "OM7.1": {
      name: "Sequence Number - Test/Observation Master File",
      required: "R",
      repeat: "1",
    },
    "OM7.2": {
      name: "Universal Service Identifier",
      required: "R",
      repeat: "1",
    },
    "OM7.3": {
      name: "Category Identifier",
      required: "O",
      repeat: "∞",
    },
    "OM7.4": {
      name: "Category Description",
      required: "O",
      repeat: "1",
    },
    "OM7.5": {
      name: "Category Synonym",
      required: "O",
      repeat: "∞",
    },
    "OM7.6": {
      name: "Effective Test/Service Start Date/Time",
      required: "O",
      repeat: "1",
    },
    "OM7.7": {
      name: "Effective Test/Service End Date/Time",
      required: "O",
      repeat: "1",
    },
    "OM7.8": {
      name: "Test/Service Default Duration Quantity",
      required: "O",
      repeat: "1",
    },
    "OM7.9": {
      name: "Test/Service Default Duration Units",
      required: "O",
      repeat: "1",
    },
    "OM7.10": {
      name: "Test/Service Default Frequency",
      required: "O",
      repeat: "1",
    },
    "OM7.11": {
      name: "Consent Indicator",
      required: "O",
      repeat: "1",
    },
    "OM7.12": {
      name: "Consent Identifier",
      required: "O",
      repeat: "1",
    },
    "OM7.13": {
      name: "Consent Effective Start Date/Time",
      required: "O",
      repeat: "1",
    },
    "OM7.14": {
      name: "Consent Effective End Date/Time",
      required: "O",
      repeat: "1",
    },
    "OM7.15": {
      name: "Consent Interval Quantity",
      required: "O",
      repeat: "1",
    },
    "OM7.16": {
      name: "Consent Interval Units",
      required: "C",
      repeat: "1",
    },
    "OM7.17": {
      name: "Consent Waiting Period Quantity",
      required: "O",
      repeat: "1",
    },
    "OM7.18": {
      name: "Consent Waiting Period Units",
      required: "C",
      repeat: "1",
    },
    "OM7.19": {
      name: "Effective Date/Time of Change",
      required: "O",
      repeat: "1",
    },
    "OM7.20": {
      name: "Entered By",
      required: "O",
      repeat: "1",
    },
    "OM7.21": {
      name: "Orderable-at Location",
      required: "O",
      repeat: "∞",
    },
    "OM7.22": {
      name: "Formulary Status",
      required: "O",
      repeat: "1",
    },
    "OM7.23": {
      name: "Special Order Indicator",
      required: "O",
      repeat: "1",
    },
    "OM7.24": {
      name: "Primary Key Value - CDM",
      required: "O",
      repeat: "∞",
    },
  },
  ORC: {
    "ORC.1": {
      name: "Order Control",
      required: "R",
      repeat: "1",
    },
    "ORC.2": {
      name: "Placer Order Number",
      required: "C",
      repeat: "1",
    },
    "ORC.3": {
      name: "Filler Order Number",
      required: "C",
      repeat: "1",
    },
    "ORC.4": {
      name: "Placer Group Number",
      required: "O",
      repeat: "1",
    },
    "ORC.5": {
      name: "Order Status",
      required: "O",
      repeat: "1",
    },
    "ORC.6": {
      name: "Response Flag",
      required: "O",
      repeat: "1",
    },
    "ORC.7": {
      name: "Quantity/Timing",
      required: "B",
      repeat: "∞",
    },
    "ORC.8": {
      name: "Parent Order",
      required: "O",
      repeat: "1",
    },
    "ORC.9": {
      name: "Date/Time of Transaction",
      required: "O",
      repeat: "1",
    },
    "ORC.10": {
      name: "Entered By",
      required: "O",
      repeat: "∞",
    },
    "ORC.11": {
      name: "Verified By",
      required: "O",
      repeat: "∞",
    },
    "ORC.12": {
      name: "Ordering Provider",
      required: "O",
      repeat: "∞",
    },
    "ORC.13": {
      name: "Enterer's Location",
      required: "O",
      repeat: "1",
    },
    "ORC.14": {
      name: "Call Back Phone Number",
      required: "O",
      repeat: "2",
    },
    "ORC.15": {
      name: "Order Effective Date/Time",
      required: "O",
      repeat: "1",
    },
    "ORC.16": {
      name: "Order Control Code Reason",
      required: "O",
      repeat: "1",
    },
    "ORC.17": {
      name: "Entering Organization",
      required: "O",
      repeat: "1",
    },
    "ORC.18": {
      name: "Entering Device",
      required: "O",
      repeat: "1",
    },
    "ORC.19": {
      name: "Action By",
      required: "O",
      repeat: "∞",
    },
    "ORC.20": {
      name: "Advanced Beneficiary Notice Code",
      required: "O",
      repeat: "1",
    },
    "ORC.21": {
      name: "Ordering Facility Name",
      required: "O",
      repeat: "∞",
    },
    "ORC.22": {
      name: "Ordering Facility Address",
      required: "O",
      repeat: "∞",
    },
    "ORC.23": {
      name: "Ordering Facility Phone Number",
      required: "O",
      repeat: "∞",
    },
    "ORC.24": {
      name: "Ordering Provider Address",
      required: "O",
      repeat: "∞",
    },
    "ORC.25": {
      name: "Order Status Modifier",
      required: "O",
      repeat: "1",
    },
    "ORC.26": {
      name: "Advanced Beneficiary Notice Override Reason",
      required: "C",
      repeat: "1",
    },
    "ORC.27": {
      name: "Filler's Expected Availability Date/Time",
      required: "O",
      repeat: "1",
    },
    "ORC.28": {
      name: "Confidentiality Code",
      required: "O",
      repeat: "1",
    },
    "ORC.29": {
      name: "Order Type",
      required: "O",
      repeat: "1",
    },
    "ORC.30": {
      name: "Enterer Authorization Mode",
      required: "O",
      repeat: "1",
    },
    "ORC.31": {
      name: "Parent Universal Service Identifier",
      required: "O",
      repeat: "1",
    },
  },
  ORG: {
    "ORG.1": {
      name: "Set ID - ORG",
      required: "R",
      repeat: "1",
    },
    "ORG.2": {
      name: "Organization Unit Code",
      required: "O",
      repeat: "1",
    },
    "ORG.3": {
      name: "Organization Unit Type Code",
      required: "O",
      repeat: "1",
    },
    "ORG.4": {
      name: "Primary Org Unit Indicator",
      required: "O",
      repeat: "1",
    },
    "ORG.5": {
      name: "Practitioner Org Unit Identifier",
      required: "O",
      repeat: "1",
    },
    "ORG.6": {
      name: "Health Care Provider Type Code",
      required: "O",
      repeat: "1",
    },
    "ORG.7": {
      name: "Health Care Provider Classification Code",
      required: "O",
      repeat: "1",
    },
    "ORG.8": {
      name: "Health Care Provider Area of Specialization Code",
      required: "O",
      repeat: "1",
    },
    "ORG.9": {
      name: "Effective Date Range",
      required: "O",
      repeat: "1",
    },
    "ORG.10": {
      name: "Employment Status Code",
      required: "O",
      repeat: "1",
    },
    "ORG.11": {
      name: "Board Approval Indicator",
      required: "O",
      repeat: "1",
    },
    "ORG.12": {
      name: "Primary Care Physician Indicator",
      required: "O",
      repeat: "1",
    },
  },
  OVR: {
    "OVR.1": {
      name: "Business Rule Override Type",
      required: "O",
      repeat: "1",
    },
    "OVR.2": {
      name: "Business Rule Override Code",
      required: "O",
      repeat: "1",
    },
    "OVR.3": {
      name: "Override Comments",
      required: "O",
      repeat: "1",
    },
    "OVR.4": {
      name: "Override Entered By",
      required: "O",
      repeat: "1",
    },
    "OVR.5": {
      name: "Override Authorized By",
      required: "O",
      repeat: "1",
    },
  },
  PCR: {
    "PCR.1": {
      name: "Implicated Product",
      required: "R",
      repeat: "1",
    },
    "PCR.2": {
      name: "Generic Product",
      required: "O",
      repeat: "1",
    },
    "PCR.3": {
      name: "Product Class",
      required: "O",
      repeat: "1",
    },
    "PCR.4": {
      name: "Total Duration Of Therapy",
      required: "O",
      repeat: "1",
    },
    "PCR.5": {
      name: "Product Manufacture Date",
      required: "O",
      repeat: "1",
    },
    "PCR.6": {
      name: "Product Expiration Date",
      required: "O",
      repeat: "1",
    },
    "PCR.7": {
      name: "Product Implantation Date",
      required: "O",
      repeat: "1",
    },
    "PCR.8": {
      name: "Product Explantation Date",
      required: "O",
      repeat: "1",
    },
    "PCR.9": {
      name: "Single Use Device",
      required: "O",
      repeat: "1",
    },
    "PCR.10": {
      name: "Indication For Product Use",
      required: "O",
      repeat: "1",
    },
    "PCR.11": {
      name: "Product Problem",
      required: "O",
      repeat: "1",
    },
    "PCR.12": {
      name: "Product Serial/Lot Number",
      required: "O",
      repeat: "3",
    },
    "PCR.13": {
      name: "Product Available For Inspection",
      required: "O",
      repeat: "1",
    },
    "PCR.14": {
      name: "Product Evaluation Performed",
      required: "O",
      repeat: "1",
    },
    "PCR.15": {
      name: "Product Evaluation Status",
      required: "O",
      repeat: "1",
    },
    "PCR.16": {
      name: "Product Evaluation Results",
      required: "O",
      repeat: "1",
    },
    "PCR.17": {
      name: "Evaluated Product Source",
      required: "O",
      repeat: "1",
    },
    "PCR.18": {
      name: "Date Product Returned To Manufacturer",
      required: "O",
      repeat: "1",
    },
    "PCR.19": {
      name: "Device Operator Qualifications",
      required: "O",
      repeat: "1",
    },
    "PCR.20": {
      name: "Relatedness Assessment",
      required: "O",
      repeat: "1",
    },
    "PCR.21": {
      name: "Action Taken In Response To The Event",
      required: "O",
      repeat: "6",
    },
    "PCR.22": {
      name: "Event Causality Observations",
      required: "O",
      repeat: "6",
    },
    "PCR.23": {
      name: "Indirect Exposure Mechanism",
      required: "O",
      repeat: "3",
    },
  },
  PD1: {
    "PD1.1": {
      name: "Living Dependency",
      required: "O",
      repeat: "∞",
    },
    "PD1.2": {
      name: "Living Arrangement",
      required: "O",
      repeat: "1",
    },
    "PD1.3": {
      name: "Patient Primary Facility",
      required: "O",
      repeat: "∞",
    },
    "PD1.4": {
      name: "Patient Primary Care Provider Name and ID No.",
      required: "B",
      repeat: "∞",
    },
    "PD1.5": {
      name: "Student Indicator",
      required: "O",
      repeat: "1",
    },
    "PD1.6": {
      name: "Handicap",
      required: "O",
      repeat: "1",
    },
    "PD1.7": {
      name: "Living Will Code",
      required: "O",
      repeat: "1",
    },
    "PD1.8": {
      name: "Organ Donor Code",
      required: "O",
      repeat: "1",
    },
    "PD1.9": {
      name: "Separate Bill",
      required: "O",
      repeat: "1",
    },
    "PD1.10": {
      name: "Duplicate Patient",
      required: "O",
      repeat: "∞",
    },
    "PD1.11": {
      name: "Publicity Code",
      required: "O",
      repeat: "1",
    },
    "PD1.12": {
      name: "Protection Indicator",
      required: "O",
      repeat: "1",
    },
    "PD1.13": {
      name: "Protection Indicator Effective Date",
      required: "O",
      repeat: "1",
    },
    "PD1.14": {
      name: "Place of Worship",
      required: "O",
      repeat: "∞",
    },
    "PD1.15": {
      name: "Advance Directive Code",
      required: "O",
      repeat: "∞",
    },
    "PD1.16": {
      name: "Immunization Registry Status",
      required: "O",
      repeat: "1",
    },
    "PD1.17": {
      name: "Immunization Registry Status Effective Date",
      required: "O",
      repeat: "1",
    },
    "PD1.18": {
      name: "Publicity Code Effective Date",
      required: "O",
      repeat: "1",
    },
    "PD1.19": {
      name: "Military Branch",
      required: "O",
      repeat: "1",
    },
    "PD1.20": {
      name: "Military Rank/Grade",
      required: "O",
      repeat: "1",
    },
    "PD1.21": {
      name: "Military Status",
      required: "O",
      repeat: "1",
    },
  },
  PDA: {
    "PDA.1": {
      name: "Death Cause Code",
      required: "O",
      repeat: "∞",
    },
    "PDA.2": {
      name: "Death Location",
      required: "O",
      repeat: "1",
    },
    "PDA.3": {
      name: "Death Certified Indicator",
      required: "O",
      repeat: "1",
    },
    "PDA.4": {
      name: "Death Certificate Signed Date/Time",
      required: "O",
      repeat: "1",
    },
    "PDA.5": {
      name: "Death Certified By",
      required: "O",
      repeat: "1",
    },
    "PDA.6": {
      name: "Autopsy Indicator",
      required: "O",
      repeat: "1",
    },
    "PDA.7": {
      name: "Autopsy Start and End Date/Time",
      required: "O",
      repeat: "1",
    },
    "PDA.8": {
      name: "Autopsy Performed By",
      required: "O",
      repeat: "1",
    },
    "PDA.9": {
      name: "Coroner Indicator",
      required: "O",
      repeat: "1",
    },
  },
  PDC: {
    "PDC.1": {
      name: "Manufacturer/Distributor",
      required: "R",
      repeat: "∞",
    },
    "PDC.2": {
      name: "Country",
      required: "R",
      repeat: "1",
    },
    "PDC.3": {
      name: "Brand Name",
      required: "R",
      repeat: "1",
    },
    "PDC.4": {
      name: "Device Family Name",
      required: "O",
      repeat: "1",
    },
    "PDC.5": {
      name: "Generic Name",
      required: "O",
      repeat: "1",
    },
    "PDC.6": {
      name: "Model Identifier",
      required: "O",
      repeat: "∞",
    },
    "PDC.7": {
      name: "Catalogue Identifier",
      required: "O",
      repeat: "1",
    },
    "PDC.8": {
      name: "Other Identifier",
      required: "O",
      repeat: "∞",
    },
    "PDC.9": {
      name: "Product Code",
      required: "O",
      repeat: "1",
    },
    "PDC.10": {
      name: "Marketing Basis",
      required: "O",
      repeat: "1",
    },
    "PDC.11": {
      name: "Marketing Approval ID",
      required: "O",
      repeat: "1",
    },
    "PDC.12": {
      name: "Labeled Shelf Life",
      required: "O",
      repeat: "1",
    },
    "PDC.13": {
      name: "Expected Shelf Life",
      required: "O",
      repeat: "1",
    },
    "PDC.14": {
      name: "Date First Marketed",
      required: "O",
      repeat: "1",
    },
    "PDC.15": {
      name: "Date Last Marketed",
      required: "O",
      repeat: "1",
    },
  },
  PEO: {
    "PEO.1": {
      name: "Event Identifiers Used",
      required: "O",
      repeat: "∞",
    },
    "PEO.2": {
      name: "Event Symptom/Diagnosis Code",
      required: "O",
      repeat: "∞",
    },
    "PEO.3": {
      name: "Event Onset Date/Time",
      required: "R",
      repeat: "1",
    },
    "PEO.4": {
      name: "Event Exacerbation Date/Time",
      required: "O",
      repeat: "1",
    },
    "PEO.5": {
      name: "Event Improved Date/Time",
      required: "O",
      repeat: "1",
    },
    "PEO.6": {
      name: "Event Ended Data/Time",
      required: "O",
      repeat: "1",
    },
    "PEO.7": {
      name: "Event Location Occurred Address",
      required: "O",
      repeat: "∞",
    },
    "PEO.8": {
      name: "Event Qualification",
      required: "O",
      repeat: "∞",
    },
    "PEO.9": {
      name: "Event Serious",
      required: "O",
      repeat: "1",
    },
    "PEO.10": {
      name: "Event Expected",
      required: "O",
      repeat: "1",
    },
    "PEO.11": {
      name: "Event Outcome",
      required: "O",
      repeat: "∞",
    },
    "PEO.12": {
      name: "Patient Outcome",
      required: "O",
      repeat: "1",
    },
    "PEO.13": {
      name: "Event Description From Others",
      required: "O",
      repeat: "∞",
    },
    "PEO.14": {
      name: "Event From Original Reporter",
      required: "O",
      repeat: "∞",
    },
    "PEO.15": {
      name: "Event Description From Patient",
      required: "O",
      repeat: "∞",
    },
    "PEO.16": {
      name: "Event Description From Practitioner",
      required: "O",
      repeat: "∞",
    },
    "PEO.17": {
      name: "Event Description From Autopsy",
      required: "O",
      repeat: "∞",
    },
    "PEO.18": {
      name: "Cause Of Death",
      required: "O",
      repeat: "∞",
    },
    "PEO.19": {
      name: "Primary Observer Name",
      required: "O",
      repeat: "∞",
    },
    "PEO.20": {
      name: "Primary Observer Address",
      required: "O",
      repeat: "∞",
    },
    "PEO.21": {
      name: "Primary Observer Telephone",
      required: "O",
      repeat: "∞",
    },
    "PEO.22": {
      name: "Primary Observer's Qualification",
      required: "O",
      repeat: "1",
    },
    "PEO.23": {
      name: "Confirmation Provided By",
      required: "O",
      repeat: "1",
    },
    "PEO.24": {
      name: "Primary Observer Aware Date/Time",
      required: "O",
      repeat: "1",
    },
    "PEO.25": {
      name: "Primary Observer's identity May Be Divulged",
      required: "O",
      repeat: "1",
    },
  },
  PES: {
    "PES.1": {
      name: "Sender Organization Name",
      required: "O",
      repeat: "∞",
    },
    "PES.2": {
      name: "Sender Individual Name",
      required: "O",
      repeat: "∞",
    },
    "PES.3": {
      name: "Sender Address",
      required: "O",
      repeat: "∞",
    },
    "PES.4": {
      name: "Sender Telephone",
      required: "O",
      repeat: "∞",
    },
    "PES.5": {
      name: "Sender Event Identifier",
      required: "O",
      repeat: "1",
    },
    "PES.6": {
      name: "Sender Sequence Number",
      required: "O",
      repeat: "1",
    },
    "PES.7": {
      name: "Sender Event Description",
      required: "O",
      repeat: "∞",
    },
    "PES.8": {
      name: "Sender Comment",
      required: "O",
      repeat: "1",
    },
    "PES.9": {
      name: "Sender Aware Date/Time",
      required: "O",
      repeat: "1",
    },
    "PES.10": {
      name: "Event Report Date",
      required: "R",
      repeat: "1",
    },
    "PES.11": {
      name: "Event Report Timing/Type",
      required: "O",
      repeat: "2",
    },
    "PES.12": {
      name: "Event Report Source",
      required: "O",
      repeat: "1",
    },
    "PES.13": {
      name: "Event Reported To",
      required: "O",
      repeat: "∞",
    },
  },
  PID: {
    "PID.1": {
      name: "Set ID - PID",
      required: "O",
      repeat: "1",
    },
    "PID.2": {
      name: "Patient ID",
      required: "B",
      repeat: "1",
    },
    "PID.3": {
      name: "Patient Identifier List",
      required: "R",
      repeat: "∞",
    },
    "PID.4": {
      name: "Alternate Patient ID - PID",
      required: "B",
      repeat: "∞",
    },
    "PID.5": {
      name: "Patient Name",
      required: "R",
      repeat: "∞",
    },
    "PID.6": {
      name: "Mother's Maiden Name",
      required: "O",
      repeat: "∞",
    },
    "PID.7": {
      name: "Date/Time of Birth",
      required: "O",
      repeat: "1",
    },
    "PID.8": {
      name: "Administrative Sex",
      required: "O",
      repeat: "1",
    },
    "PID.9": {
      name: "Patient Alias",
      required: "B",
      repeat: "∞",
    },
    "PID.10": {
      name: "Race",
      required: "O",
      repeat: "∞",
    },
    "PID.11": {
      name: "Patient Address",
      required: "O",
      repeat: "∞",
    },
    "PID.12": {
      name: "County Code",
      required: "B",
      repeat: "1",
    },
    "PID.13": {
      name: "Phone Number - Home",
      required: "O",
      repeat: "∞",
    },
    "PID.14": {
      name: "Phone Number - Business",
      required: "O",
      repeat: "∞",
    },
    "PID.15": {
      name: "Primary Language",
      required: "O",
      repeat: "1",
    },
    "PID.16": {
      name: "Marital Status",
      required: "O",
      repeat: "1",
    },
    "PID.17": {
      name: "Religion",
      required: "O",
      repeat: "1",
    },
    "PID.18": {
      name: "Patient Account Number",
      required: "O",
      repeat: "1",
    },
    "PID.19": {
      name: "SSN Number - Patient",
      required: "B",
      repeat: "1",
    },
    "PID.20": {
      name: "Driver's License Number - Patient",
      required: "B",
      repeat: "1",
    },
    "PID.21": {
      name: "Mother's Identifier",
      required: "O",
      repeat: "∞",
    },
    "PID.22": {
      name: "Ethnic Group",
      required: "O",
      repeat: "∞",
    },
    "PID.23": {
      name: "Birth Place",
      required: "O",
      repeat: "1",
    },
    "PID.24": {
      name: "Multiple Birth Indicator",
      required: "O",
      repeat: "1",
    },
    "PID.25": {
      name: "Birth Order",
      required: "O",
      repeat: "1",
    },
    "PID.26": {
      name: "Citizenship",
      required: "O",
      repeat: "∞",
    },
    "PID.27": {
      name: "Veterans Military Status",
      required: "O",
      repeat: "1",
    },
    "PID.28": {
      name: "Nationality",
      required: "B",
      repeat: "1",
    },
    "PID.29": {
      name: "Patient Death Date and Time",
      required: "O",
      repeat: "1",
    },
    "PID.30": {
      name: "Patient Death Indicator",
      required: "O",
      repeat: "1",
    },
    "PID.31": {
      name: "Identity Unknown Indicator",
      required: "O",
      repeat: "1",
    },
    "PID.32": {
      name: "Identity Reliability Code",
      required: "O",
      repeat: "∞",
    },
    "PID.33": {
      name: "Last Update Date/Time",
      required: "O",
      repeat: "1",
    },
    "PID.34": {
      name: "Last Update Facility",
      required: "O",
      repeat: "1",
    },
    "PID.35": {
      name: "Species Code",
      required: "C",
      repeat: "1",
    },
    "PID.36": {
      name: "Breed Code",
      required: "C",
      repeat: "1",
    },
    "PID.37": {
      name: "Strain",
      required: "O",
      repeat: "1",
    },
    "PID.38": {
      name: "Production Class Code",
      required: "O",
      repeat: "2",
    },
    "PID.39": {
      name: "Tribal Citizenship",
      required: "O",
      repeat: "∞",
    },
  },
  PR1: {
    "PR1.1": {
      name: "Set ID - PR1",
      required: "R",
      repeat: "1",
    },
    "PR1.2": {
      name: "Procedure Coding Method",
      required: "B",
      repeat: "1",
    },
    "PR1.3": {
      name: "Procedure Code",
      required: "R",
      repeat: "1",
    },
    "PR1.4": {
      name: "Procedure Description",
      required: "B",
      repeat: "1",
    },
    "PR1.5": {
      name: "Procedure Date/Time",
      required: "R",
      repeat: "1",
    },
    "PR1.6": {
      name: "Procedure Functional Type",
      required: "O",
      repeat: "1",
    },
    "PR1.7": {
      name: "Procedure Minutes",
      required: "O",
      repeat: "1",
    },
    "PR1.8": {
      name: "Anesthesiologist",
      required: "B",
      repeat: "∞",
    },
    "PR1.9": {
      name: "Anesthesia Code",
      required: "O",
      repeat: "1",
    },
    "PR1.10": {
      name: "Anesthesia Minutes",
      required: "O",
      repeat: "1",
    },
    "PR1.11": {
      name: "Surgeon",
      required: "B",
      repeat: "∞",
    },
    "PR1.12": {
      name: "Procedure Practitioner",
      required: "B",
      repeat: "∞",
    },
    "PR1.13": {
      name: "Consent Code",
      required: "O",
      repeat: "1",
    },
    "PR1.14": {
      name: "Procedure Priority",
      required: "O",
      repeat: "1",
    },
    "PR1.15": {
      name: "Associated Diagnosis Code",
      required: "O",
      repeat: "1",
    },
    "PR1.16": {
      name: "Procedure Code Modifier",
      required: "O",
      repeat: "∞",
    },
    "PR1.17": {
      name: "Procedure DRG Type",
      required: "O",
      repeat: "1",
    },
    "PR1.18": {
      name: "Tissue Type Code",
      required: "O",
      repeat: "∞",
    },
    "PR1.19": {
      name: "Procedure Identifier",
      required: "C",
      repeat: "1",
    },
    "PR1.20": {
      name: "Procedure Action Code",
      required: "C",
      repeat: "1",
    },
  },
  PRA: {
    "PRA.1": {
      name: "Primary Key Value - PRA",
      required: "C",
      repeat: "1",
    },
    "PRA.2": {
      name: "Practitioner Group",
      required: "O",
      repeat: "∞",
    },
    "PRA.3": {
      name: "Practitioner Category",
      required: "O",
      repeat: "∞",
    },
    "PRA.4": {
      name: "Provider Billing",
      required: "O",
      repeat: "1",
    },
    "PRA.5": {
      name: "Specialty",
      required: "O",
      repeat: "∞",
    },
    "PRA.6": {
      name: "Practitioner ID Numbers",
      required: "B",
      repeat: "∞",
    },
    "PRA.7": {
      name: "Privileges",
      required: "O",
      repeat: "∞",
    },
    "PRA.8": {
      name: "Date Entered Practice",
      required: "O",
      repeat: "1",
    },
    "PRA.9": {
      name: "Institution",
      required: "O",
      repeat: "1",
    },
    "PRA.10": {
      name: "Date Left Practice",
      required: "O",
      repeat: "1",
    },
    "PRA.11": {
      name: "Government Reimbursement Billing Eligibility",
      required: "O",
      repeat: "∞",
    },
    "PRA.12": {
      name: "Set ID - PRA",
      required: "C",
      repeat: "1",
    },
  },
  PRB: {
    "PRB.1": {
      name: "Action Code",
      required: "R",
      repeat: "1",
    },
    "PRB.2": {
      name: "Action Date/Time",
      required: "R",
      repeat: "1",
    },
    "PRB.3": {
      name: "Problem ID",
      required: "R",
      repeat: "1",
    },
    "PRB.4": {
      name: "Problem Instance ID",
      required: "R",
      repeat: "1",
    },
    "PRB.5": {
      name: "Episode of Care ID",
      required: "O",
      repeat: "1",
    },
    "PRB.6": {
      name: "Problem List Priority",
      required: "O",
      repeat: "1",
    },
    "PRB.7": {
      name: "Problem Established Date/Time",
      required: "O",
      repeat: "1",
    },
    "PRB.8": {
      name: "Anticipated Problem Resolution Date/Time",
      required: "O",
      repeat: "1",
    },
    "PRB.9": {
      name: "Actual Problem Resolution Date/Time",
      required: "O",
      repeat: "1",
    },
    "PRB.10": {
      name: "Problem Classification",
      required: "O",
      repeat: "1",
    },
    "PRB.11": {
      name: "Problem Management Discipline",
      required: "O",
      repeat: "∞",
    },
    "PRB.12": {
      name: "Problem Persistence",
      required: "O",
      repeat: "1",
    },
    "PRB.13": {
      name: "Problem Confirmation Status",
      required: "O",
      repeat: "1",
    },
    "PRB.14": {
      name: "Problem Life Cycle Status",
      required: "O",
      repeat: "1",
    },
    "PRB.15": {
      name: "Problem Life Cycle Status Date/Time",
      required: "O",
      repeat: "1",
    },
    "PRB.16": {
      name: "Problem Date of Onset",
      required: "O",
      repeat: "1",
    },
    "PRB.17": {
      name: "Problem Onset Text",
      required: "O",
      repeat: "1",
    },
    "PRB.18": {
      name: "Problem Ranking",
      required: "O",
      repeat: "1",
    },
    "PRB.19": {
      name: "Certainty of Problem (0-1)",
      required: "O",
      repeat: "1",
    },
    "PRB.20": {
      name: "Probability of Problem",
      required: "O",
      repeat: "1",
    },
    "PRB.21": {
      name: "Individual Awareness of Problem",
      required: "O",
      repeat: "1",
    },
    "PRB.22": {
      name: "Problem Prognosis",
      required: "O",
      repeat: "1",
    },
    "PRB.23": {
      name: "Individual Awareness of Prognosis",
      required: "O",
      repeat: "1",
    },
    "PRB.24": {
      name: "Family/Significant Other Awareness of Problem/Prognosis",
      required: "O",
      repeat: "1",
    },
    "PRB.25": {
      name: "Security/Sensitivity",
      required: "O",
      repeat: "1",
    },
  },
  PRC: {
    "PRC.1": {
      name: "Primary Key Value - PRC",
      required: "R",
      repeat: "1",
    },
    "PRC.2": {
      name: "Facility ID - PRC",
      required: "O",
      repeat: "∞",
    },
    "PRC.3": {
      name: "Department",
      required: "O",
      repeat: "∞",
    },
    "PRC.4": {
      name: "Valid Patient Classes",
      required: "O",
      repeat: "∞",
    },
    "PRC.5": {
      name: "Price",
      required: "C",
      repeat: "∞",
    },
    "PRC.6": {
      name: "Formula",
      required: "O",
      repeat: "∞",
    },
    "PRC.7": {
      name: "Minimum Quantity",
      required: "O",
      repeat: "1",
    },
    "PRC.8": {
      name: "Maximum Quantity",
      required: "O",
      repeat: "1",
    },
    "PRC.9": {
      name: "Minimum Price",
      required: "O",
      repeat: "1",
    },
    "PRC.10": {
      name: "Maximum Price",
      required: "O",
      repeat: "1",
    },
    "PRC.11": {
      name: "Effective Start Date",
      required: "O",
      repeat: "1",
    },
    "PRC.12": {
      name: "Effective End Date",
      required: "O",
      repeat: "1",
    },
    "PRC.13": {
      name: "Price Override Flag",
      required: "O",
      repeat: "1",
    },
    "PRC.14": {
      name: "Billing Category",
      required: "O",
      repeat: "∞",
    },
    "PRC.15": {
      name: "Chargeable Flag",
      required: "O",
      repeat: "1",
    },
    "PRC.16": {
      name: "Active/Inactive Flag",
      required: "O",
      repeat: "1",
    },
    "PRC.17": {
      name: "Cost",
      required: "O",
      repeat: "1",
    },
    "PRC.18": {
      name: "Charge On Indicator",
      required: "O",
      repeat: "1",
    },
  },
  PRD: {
    "PRD.1": {
      name: "Provider Role",
      required: "R",
      repeat: "∞",
    },
    "PRD.2": {
      name: "Provider Name",
      required: "O",
      repeat: "∞",
    },
    "PRD.3": {
      name: "Provider Address",
      required: "O",
      repeat: "∞",
    },
    "PRD.4": {
      name: "Provider Location",
      required: "O",
      repeat: "1",
    },
    "PRD.5": {
      name: "Provider Communication Information",
      required: "O",
      repeat: "∞",
    },
    "PRD.6": {
      name: "Preferred Method of Contact",
      required: "O",
      repeat: "1",
    },
    "PRD.7": {
      name: "Provider Identifiers",
      required: "O",
      repeat: "∞",
    },
    "PRD.8": {
      name: "Effective Start Date of Provider Role",
      required: "O",
      repeat: "1",
    },
    "PRD.9": {
      name: "Effective End Date of Provider Role",
      required: "O",
      repeat: "1",
    },
  },
  PSH: {
    "PSH.1": {
      name: "Report Type",
      required: "R",
      repeat: "1",
    },
    "PSH.2": {
      name: "Report Form Identifier",
      required: "O",
      repeat: "1",
    },
    "PSH.3": {
      name: "Report Date",
      required: "R",
      repeat: "1",
    },
    "PSH.4": {
      name: "Report Interval Start Date",
      required: "O",
      repeat: "1",
    },
    "PSH.5": {
      name: "Report Interval End Date",
      required: "O",
      repeat: "1",
    },
    "PSH.6": {
      name: "Quantity Manufactured",
      required: "O",
      repeat: "1",
    },
    "PSH.7": {
      name: "Quantity Distributed",
      required: "O",
      repeat: "1",
    },
    "PSH.8": {
      name: "Quantity Distributed Method",
      required: "O",
      repeat: "1",
    },
    "PSH.9": {
      name: "Quantity Distributed Comment",
      required: "O",
      repeat: "1",
    },
    "PSH.10": {
      name: "Quantity in Use",
      required: "O",
      repeat: "1",
    },
    "PSH.11": {
      name: "Quantity in Use Method",
      required: "O",
      repeat: "1",
    },
    "PSH.12": {
      name: "Quantity in Use Comment",
      required: "O",
      repeat: "1",
    },
    "PSH.13": {
      name: "Number of Product Experience Reports Filed by Facility",
      required: "O",
      repeat: "8",
    },
    "PSH.14": {
      name: "Number of Product Experience Reports Filed by Distributor",
      required: "O",
      repeat: "8",
    },
  },
  PTH: {
    "PTH.1": {
      name: "Action Code",
      required: "R",
      repeat: "1",
    },
    "PTH.2": {
      name: "Pathway ID",
      required: "R",
      repeat: "1",
    },
    "PTH.3": {
      name: "Pathway Instance ID",
      required: "R",
      repeat: "1",
    },
    "PTH.4": {
      name: "Pathway Established Date/Time",
      required: "R",
      repeat: "1",
    },
    "PTH.5": {
      name: "Pathway Life Cycle Status",
      required: "O",
      repeat: "1",
    },
    "PTH.6": {
      name: "Change Pathway Life Cycle Status Date/Time",
      required: "C",
      repeat: "1",
    },
  },
  PV1: {
    "PV1.1": {
      name: "Set ID - PV1",
      required: "O",
      repeat: "1",
    },
    "PV1.2": {
      name: "Patient Class",
      required: "R",
      repeat: "1",
    },
    "PV1.3": {
      name: "Assigned Patient Location",
      required: "O",
      repeat: "1",
    },
    "PV1.4": {
      name: "Admission Type",
      required: "O",
      repeat: "1",
    },
    "PV1.5": {
      name: "Preadmit Number",
      required: "O",
      repeat: "1",
    },
    "PV1.6": {
      name: "Prior Patient Location",
      required: "O",
      repeat: "1",
    },
    "PV1.7": {
      name: "Attending Doctor",
      required: "O",
      repeat: "∞",
    },
    "PV1.8": {
      name: "Referring Doctor",
      required: "O",
      repeat: "∞",
    },
    "PV1.9": {
      name: "Consulting Doctor",
      required: "B",
      repeat: "∞",
    },
    "PV1.10": {
      name: "Hospital Service",
      required: "O",
      repeat: "1",
    },
    "PV1.11": {
      name: "Temporary Location",
      required: "O",
      repeat: "1",
    },
    "PV1.12": {
      name: "Preadmit Test Indicator",
      required: "O",
      repeat: "1",
    },
    "PV1.13": {
      name: "Re-admission Indicator",
      required: "O",
      repeat: "1",
    },
    "PV1.14": {
      name: "Admit Source",
      required: "O",
      repeat: "1",
    },
    "PV1.15": {
      name: "Ambulatory Status",
      required: "O",
      repeat: "∞",
    },
    "PV1.16": {
      name: "VIP Indicator",
      required: "O",
      repeat: "1",
    },
    "PV1.17": {
      name: "Admitting Doctor",
      required: "O",
      repeat: "∞",
    },
    "PV1.18": {
      name: "Patient Type",
      required: "O",
      repeat: "1",
    },
    "PV1.19": {
      name: "Visit Number",
      required: "O",
      repeat: "1",
    },
    "PV1.20": {
      name: "Financial Class",
      required: "O",
      repeat: "∞",
    },
    "PV1.21": {
      name: "Charge Price Indicator",
      required: "O",
      repeat: "1",
    },
    "PV1.22": {
      name: "Courtesy Code",
      required: "O",
      repeat: "1",
    },
    "PV1.23": {
      name: "Credit Rating",
      required: "O",
      repeat: "1",
    },
    "PV1.24": {
      name: "Contract Code",
      required: "O",
      repeat: "∞",
    },
    "PV1.25": {
      name: "Contract Effective Date",
      required: "O",
      repeat: "∞",
    },
    "PV1.26": {
      name: "Contract Amount",
      required: "O",
      repeat: "∞",
    },
    "PV1.27": {
      name: "Contract Period",
      required: "O",
      repeat: "∞",
    },
    "PV1.28": {
      name: "Interest Code",
      required: "O",
      repeat: "1",
    },
    "PV1.29": {
      name: "Transfer to Bad Debt Code",
      required: "O",
      repeat: "1",
    },
    "PV1.30": {
      name: "Transfer to Bad Debt Date",
      required: "O",
      repeat: "1",
    },
    "PV1.31": {
      name: "Bad Debt Agency Code",
      required: "O",
      repeat: "1",
    },
    "PV1.32": {
      name: "Bad Debt Transfer Amount",
      required: "O",
      repeat: "1",
    },
    "PV1.33": {
      name: "Bad Debt Recovery Amount",
      required: "O",
      repeat: "1",
    },
    "PV1.34": {
      name: "Delete Account Indicator",
      required: "O",
      repeat: "1",
    },
    "PV1.35": {
      name: "Delete Account Date",
      required: "O",
      repeat: "1",
    },
    "PV1.36": {
      name: "Discharge Disposition",
      required: "O",
      repeat: "1",
    },
    "PV1.37": {
      name: "Discharged to Location",
      required: "O",
      repeat: "1",
    },
    "PV1.38": {
      name: "Diet Type",
      required: "O",
      repeat: "1",
    },
    "PV1.39": {
      name: "Servicing Facility",
      required: "O",
      repeat: "1",
    },
    "PV1.40": {
      name: "Bed Status",
      required: "B",
      repeat: "1",
    },
    "PV1.41": {
      name: "Account Status",
      required: "O",
      repeat: "1",
    },
    "PV1.42": {
      name: "Pending Location",
      required: "O",
      repeat: "1",
    },
    "PV1.43": {
      name: "Prior Temporary Location",
      required: "O",
      repeat: "1",
    },
    "PV1.44": {
      name: "Admit Date/Time",
      required: "O",
      repeat: "1",
    },
    "PV1.45": {
      name: "Discharge Date/Time",
      required: "O",
      repeat: "∞",
    },
    "PV1.46": {
      name: "Current Patient Balance",
      required: "O",
      repeat: "1",
    },
    "PV1.47": {
      name: "Total Charges",
      required: "O",
      repeat: "1",
    },
    "PV1.48": {
      name: "Total Adjustments",
      required: "O",
      repeat: "1",
    },
    "PV1.49": {
      name: "Total Payments",
      required: "O",
      repeat: "1",
    },
    "PV1.50": {
      name: "Alternate Visit ID",
      required: "O",
      repeat: "1",
    },
    "PV1.51": {
      name: "Visit Indicator",
      required: "O",
      repeat: "1",
    },
    "PV1.52": {
      name: "Other Healthcare Provider",
      required: "B",
      repeat: "∞",
    },
  },
  PV2: {
    "PV2.1": {
      name: "Prior Pending Location",
      required: "C",
      repeat: "1",
    },
    "PV2.2": {
      name: "Accommodation Code",
      required: "O",
      repeat: "1",
    },
    "PV2.3": {
      name: "Admit Reason",
      required: "O",
      repeat: "1",
    },
    "PV2.4": {
      name: "Transfer Reason",
      required: "O",
      repeat: "1",
    },
    "PV2.5": {
      name: "Patient Valuables",
      required: "O",
      repeat: "∞",
    },
    "PV2.6": {
      name: "Patient Valuables Location",
      required: "O",
      repeat: "1",
    },
    "PV2.7": {
      name: "Visit User Code",
      required: "O",
      repeat: "∞",
    },
    "PV2.8": {
      name: "Expected Admit Date/Time",
      required: "O",
      repeat: "1",
    },
    "PV2.9": {
      name: "Expected Discharge Date/Time",
      required: "O",
      repeat: "1",
    },
    "PV2.10": {
      name: "Estimated Length of Inpatient Stay",
      required: "O",
      repeat: "1",
    },
    "PV2.11": {
      name: "Actual Length of Inpatient Stay",
      required: "O",
      repeat: "1",
    },
    "PV2.12": {
      name: "Visit Description",
      required: "O",
      repeat: "1",
    },
    "PV2.13": {
      name: "Referral Source Code",
      required: "O",
      repeat: "∞",
    },
    "PV2.14": {
      name: "Previous Service Date",
      required: "O",
      repeat: "1",
    },
    "PV2.15": {
      name: "Employment Illness Related Indicator",
      required: "O",
      repeat: "1",
    },
    "PV2.16": {
      name: "Purge Status Code",
      required: "O",
      repeat: "1",
    },
    "PV2.17": {
      name: "Purge Status Date",
      required: "O",
      repeat: "1",
    },
    "PV2.18": {
      name: "Special Program Code",
      required: "O",
      repeat: "1",
    },
    "PV2.19": {
      name: "Retention Indicator",
      required: "O",
      repeat: "1",
    },
    "PV2.20": {
      name: "Expected Number of Insurance Plans",
      required: "O",
      repeat: "1",
    },
    "PV2.21": {
      name: "Visit Publicity Code",
      required: "O",
      repeat: "1",
    },
    "PV2.22": {
      name: "Visit Protection Indicator",
      required: "O",
      repeat: "1",
    },
    "PV2.23": {
      name: "Clinic Organization Name",
      required: "O",
      repeat: "∞",
    },
    "PV2.24": {
      name: "Patient Status Code",
      required: "O",
      repeat: "1",
    },
    "PV2.25": {
      name: "Visit Priority Code",
      required: "O",
      repeat: "1",
    },
    "PV2.26": {
      name: "Previous Treatment Date",
      required: "O",
      repeat: "1",
    },
    "PV2.27": {
      name: "Expected Discharge Disposition",
      required: "O",
      repeat: "1",
    },
    "PV2.28": {
      name: "Signature on File Date",
      required: "O",
      repeat: "1",
    },
    "PV2.29": {
      name: "First Similar Illness Date",
      required: "O",
      repeat: "1",
    },
    "PV2.30": {
      name: "Patient Charge Adjustment Code",
      required: "O",
      repeat: "1",
    },
    "PV2.31": {
      name: "Recurring Service Code",
      required: "O",
      repeat: "1",
    },
    "PV2.32": {
      name: "Billing Media Code",
      required: "O",
      repeat: "1",
    },
    "PV2.33": {
      name: "Expected Surgery Date and Time",
      required: "O",
      repeat: "1",
    },
    "PV2.34": {
      name: "Military Partnership Code",
      required: "O",
      repeat: "1",
    },
    "PV2.35": {
      name: "Military Non-Availability Code",
      required: "O",
      repeat: "1",
    },
    "PV2.36": {
      name: "Newborn Baby Indicator",
      required: "O",
      repeat: "1",
    },
    "PV2.37": {
      name: "Baby Detained Indicator",
      required: "O",
      repeat: "1",
    },
    "PV2.38": {
      name: "Mode of Arrival Code",
      required: "O",
      repeat: "1",
    },
    "PV2.39": {
      name: "Recreational Drug Use Code",
      required: "O",
      repeat: "∞",
    },
    "PV2.40": {
      name: "Admission Level of Care Code",
      required: "O",
      repeat: "1",
    },
    "PV2.41": {
      name: "Precaution Code",
      required: "O",
      repeat: "∞",
    },
    "PV2.42": {
      name: "Patient Condition Code",
      required: "O",
      repeat: "1",
    },
    "PV2.43": {
      name: "Living Will Code",
      required: "O",
      repeat: "1",
    },
    "PV2.44": {
      name: "Organ Donor Code",
      required: "O",
      repeat: "1",
    },
    "PV2.45": {
      name: "Advance Directive Code",
      required: "O",
      repeat: "∞",
    },
    "PV2.46": {
      name: "Patient Status Effective Date",
      required: "O",
      repeat: "1",
    },
    "PV2.47": {
      name: "Expected LOA Return Date/Time",
      required: "C",
      repeat: "1",
    },
    "PV2.48": {
      name: "Expected Pre-admission Testing Date/Time",
      required: "O",
      repeat: "1",
    },
    "PV2.49": {
      name: "Notify Clergy Code",
      required: "O",
      repeat: "∞",
    },
  },
  QAK: {
    "QAK.1": {
      name: "Query Tag",
      required: "C",
      repeat: "1",
    },
    "QAK.2": {
      name: "Query Response Status",
      required: "O",
      repeat: "1",
    },
    "QAK.3": {
      name: "Message Query Name",
      required: "O",
      repeat: "1",
    },
    "QAK.4": {
      name: "Hit Count",
      required: "O",
      repeat: "1",
    },
    "QAK.5": {
      name: "This payload",
      required: "O",
      repeat: "1",
    },
    "QAK.6": {
      name: "Hits remaining",
      required: "O",
      repeat: "1",
    },
  },
  QID: {
    "QID.1": {
      name: "Query Tag",
      required: "R",
      repeat: "1",
    },
    "QID.2": {
      name: "Message Query Name",
      required: "R",
      repeat: "1",
    },
  },
  QPD: {
    "QPD.1": {
      name: "Message Query Name",
      required: "R",
      repeat: "1",
    },
    "QPD.2": {
      name: "Query Tag",
      required: "C",
      repeat: "1",
    },
    "QPD.3": {
      name: "User Parameters (in successive fields)",
      required: "O",
      repeat: "1",
    },
  },
  QRD: {
    "QRD.1": {
      name: "Query Date/Time",
      required: "R",
      repeat: "1",
    },
    "QRD.2": {
      name: "Query Format Code",
      required: "R",
      repeat: "1",
    },
    "QRD.3": {
      name: "Query Priority",
      required: "R",
      repeat: "1",
    },
    "QRD.4": {
      name: "Query ID",
      required: "R",
      repeat: "1",
    },
    "QRD.5": {
      name: "Deferred Response Type",
      required: "O",
      repeat: "1",
    },
    "QRD.6": {
      name: "Deferred Response Date/Time",
      required: "O",
      repeat: "1",
    },
    "QRD.7": {
      name: "Quantity Limited Request",
      required: "R",
      repeat: "1",
    },
    "QRD.8": {
      name: "Who Subject Filter",
      required: "R",
      repeat: "∞",
    },
    "QRD.9": {
      name: "What Subject Filter",
      required: "R",
      repeat: "∞",
    },
    "QRD.10": {
      name: "What Department Data Code",
      required: "R",
      repeat: "∞",
    },
    "QRD.11": {
      name: "What Data Code Value Qual.",
      required: "O",
      repeat: "∞",
    },
    "QRD.12": {
      name: "Query Results Level",
      required: "O",
      repeat: "1",
    },
  },
  QRF: {
    "QRF.1": {
      name: "Where Subject Filter",
      required: "R",
      repeat: "∞",
    },
    "QRF.2": {
      name: "When Data Start Date/Time",
      required: "B",
      repeat: "1",
    },
    "QRF.3": {
      name: "When Data End Date/Time",
      required: "B",
      repeat: "1",
    },
    "QRF.4": {
      name: "What User Qualifier",
      required: "O",
      repeat: "∞",
    },
    "QRF.5": {
      name: "Other QRY Subject Filter",
      required: "O",
      repeat: "∞",
    },
    "QRF.6": {
      name: "Which Date/Time Qualifier",
      required: "O",
      repeat: "∞",
    },
    "QRF.7": {
      name: "Which Date/Time Status Qualifier",
      required: "O",
      repeat: "∞",
    },
    "QRF.8": {
      name: "Date/Time Selection Qualifier",
      required: "O",
      repeat: "∞",
    },
    "QRF.9": {
      name: "When Quantity/Timing Qualifier",
      required: "O",
      repeat: "1",
    },
    "QRF.10": {
      name: "Search Confidence Threshold",
      required: "O",
      repeat: "1",
    },
  },
  QRI: {
    "QRI.1": {
      name: "Candidate Confidence",
      required: "O",
      repeat: "1",
    },
    "QRI.2": {
      name: "Match Reason Code",
      required: "O",
      repeat: "∞",
    },
    "QRI.3": {
      name: "Algorithm Descriptor",
      required: "O",
      repeat: "1",
    },
  },
  RCP: {
    "RCP.1": {
      name: "Query Priority",
      required: "O",
      repeat: "1",
    },
    "RCP.2": {
      name: "Quantity Limited Request",
      required: "O",
      repeat: "1",
    },
    "RCP.3": {
      name: "Response Modality",
      required: "O",
      repeat: "1",
    },
    "RCP.4": {
      name: "Execution and Delivery Time",
      required: "C",
      repeat: "1",
    },
    "RCP.5": {
      name: "Modify Indicator",
      required: "O",
      repeat: "1",
    },
    "RCP.6": {
      name: "Sort-by Field",
      required: "O",
      repeat: "∞",
    },
    "RCP.7": {
      name: "Segment group inclusion",
      required: "O",
      repeat: "∞",
    },
  },
  RDF: {
    "RDF.1": {
      name: "Number of Columns per Row",
      required: "R",
      repeat: "1",
    },
    "RDF.2": {
      name: "Column Description",
      required: "R",
      repeat: "∞",
    },
  },
  RDT: {
    "RDT.1": {
      name: "Column Value",
      required: "R",
      repeat: "1",
    },
  },
  RF1: {
    "RF1.1": {
      name: "Referral Status",
      required: "O",
      repeat: "1",
    },
    "RF1.2": {
      name: "Referral Priority",
      required: "O",
      repeat: "1",
    },
    "RF1.3": {
      name: "Referral Type",
      required: "O",
      repeat: "1",
    },
    "RF1.4": {
      name: "Referral Disposition",
      required: "O",
      repeat: "∞",
    },
    "RF1.5": {
      name: "Referral Category",
      required: "O",
      repeat: "1",
    },
    "RF1.6": {
      name: "Originating Referral Identifier",
      required: "R",
      repeat: "1",
    },
    "RF1.7": {
      name: "Effective Date",
      required: "O",
      repeat: "1",
    },
    "RF1.8": {
      name: "Expiration Date",
      required: "O",
      repeat: "1",
    },
    "RF1.9": {
      name: "Process Date",
      required: "O",
      repeat: "1",
    },
    "RF1.10": {
      name: "Referral Reason",
      required: "O",
      repeat: "∞",
    },
    "RF1.11": {
      name: "External Referral Identifier",
      required: "O",
      repeat: "∞",
    },
  },
  RGS: {
    "RGS.1": {
      name: "Set ID - RGS",
      required: "R",
      repeat: "1",
    },
    "RGS.2": {
      name: "Segment Action Code",
      required: "C",
      repeat: "1",
    },
    "RGS.3": {
      name: "Resource Group ID",
      required: "O",
      repeat: "1",
    },
  },
  RMI: {
    "RMI.1": {
      name: "Risk Management Incident Code",
      required: "O",
      repeat: "1",
    },
    "RMI.2": {
      name: "Date/Time Incident",
      required: "O",
      repeat: "1",
    },
    "RMI.3": {
      name: "Incident Type Code",
      required: "O",
      repeat: "1",
    },
  },
  ROL: {
    "ROL.1": {
      name: "Role Instance ID",
      required: "C",
      repeat: "1",
    },
    "ROL.2": {
      name: "Action Code",
      required: "R",
      repeat: "1",
    },
    "ROL.3": {
      name: "Role-ROL",
      required: "R",
      repeat: "1",
    },
    "ROL.4": {
      name: "Role Person",
      required: "R",
      repeat: "∞",
    },
    "ROL.5": {
      name: "Role Begin Date/Time",
      required: "O",
      repeat: "1",
    },
    "ROL.6": {
      name: "Role End Date/Time",
      required: "O",
      repeat: "1",
    },
    "ROL.7": {
      name: "Role Duration",
      required: "O",
      repeat: "1",
    },
    "ROL.8": {
      name: "Role Action Reason",
      required: "O",
      repeat: "1",
    },
    "ROL.9": {
      name: "Provider Type",
      required: "O",
      repeat: "∞",
    },
    "ROL.10": {
      name: "Organization Unit Type",
      required: "O",
      repeat: "1",
    },
    "ROL.11": {
      name: "Office/Home Address/Birthplace",
      required: "O",
      repeat: "∞",
    },
    "ROL.12": {
      name: "Phone",
      required: "O",
      repeat: "∞",
    },
  },
  RQ1: {
    "RQ1.1": {
      name: "Anticipated Price",
      required: "O",
      repeat: "1",
    },
    "RQ1.2": {
      name: "Manufacturer Identifier",
      required: "C",
      repeat: "1",
    },
    "RQ1.3": {
      name: "Manufacturer's Catalog",
      required: "C",
      repeat: "1",
    },
    "RQ1.4": {
      name: "Vendor ID",
      required: "C",
      repeat: "1",
    },
    "RQ1.5": {
      name: "Vendor Catalog",
      required: "C",
      repeat: "1",
    },
    "RQ1.6": {
      name: "Taxable",
      required: "O",
      repeat: "1",
    },
    "RQ1.7": {
      name: "Substitute Allowed",
      required: "O",
      repeat: "1",
    },
  },
  RQD: {
    "RQD.1": {
      name: "Requisition Line Number",
      required: "O",
      repeat: "1",
    },
    "RQD.2": {
      name: "Item Code - Internal",
      required: "C",
      repeat: "1",
    },
    "RQD.3": {
      name: "Item Code - External",
      required: "C",
      repeat: "1",
    },
    "RQD.4": {
      name: "Hospital Item Code",
      required: "C",
      repeat: "1",
    },
    "RQD.5": {
      name: "Requisition Quantity",
      required: "O",
      repeat: "1",
    },
    "RQD.6": {
      name: "Requisition Unit of Measure",
      required: "O",
      repeat: "1",
    },
    "RQD.7": {
      name: "Dept. Cost Center",
      required: "O",
      repeat: "1",
    },
    "RQD.8": {
      name: "Item Natural Account Code",
      required: "O",
      repeat: "1",
    },
    "RQD.9": {
      name: "Deliver To ID",
      required: "O",
      repeat: "1",
    },
    "RQD.10": {
      name: "Date Needed",
      required: "O",
      repeat: "1",
    },
  },
  RXA: {
    "RXA.1": {
      name: "Give Sub-ID Counter",
      required: "R",
      repeat: "1",
    },
    "RXA.2": {
      name: "Administration Sub-ID Counter",
      required: "R",
      repeat: "1",
    },
    "RXA.3": {
      name: "Date/Time Start of Administration",
      required: "R",
      repeat: "1",
    },
    "RXA.4": {
      name: "Date/Time End of Administration",
      required: "R",
      repeat: "1",
    },
    "RXA.5": {
      name: "Administered Code",
      required: "R",
      repeat: "1",
    },
    "RXA.6": {
      name: "Administered Amount",
      required: "R",
      repeat: "1",
    },
    "RXA.7": {
      name: "Administered Units",
      required: "C",
      repeat: "1",
    },
    "RXA.8": {
      name: "Administered Dosage Form",
      required: "O",
      repeat: "1",
    },
    "RXA.9": {
      name: "Administration Notes",
      required: "O",
      repeat: "∞",
    },
    "RXA.10": {
      name: "Administering Provider",
      required: "O",
      repeat: "∞",
    },
    "RXA.11": {
      name: "Administered-at Location",
      required: "C",
      repeat: "1",
    },
    "RXA.12": {
      name: "Administered Per (Time Unit)",
      required: "C",
      repeat: "1",
    },
    "RXA.13": {
      name: "Administered Strength",
      required: "O",
      repeat: "1",
    },
    "RXA.14": {
      name: "Administered Strength Units",
      required: "O",
      repeat: "1",
    },
    "RXA.15": {
      name: "Substance Lot Number",
      required: "O",
      repeat: "∞",
    },
    "RXA.16": {
      name: "Substance Expiration Date",
      required: "O",
      repeat: "∞",
    },
    "RXA.17": {
      name: "Substance Manufacturer Name",
      required: "O",
      repeat: "∞",
    },
    "RXA.18": {
      name: "Substance/Treatment Refusal Reason",
      required: "O",
      repeat: "∞",
    },
    "RXA.19": {
      name: "Indication",
      required: "O",
      repeat: "∞",
    },
    "RXA.20": {
      name: "Completion Status",
      required: "O",
      repeat: "1",
    },
    "RXA.21": {
      name: "Action Code - RXA",
      required: "O",
      repeat: "1",
    },
    "RXA.22": {
      name: "System Entry Date/Time",
      required: "O",
      repeat: "1",
    },
    "RXA.23": {
      name: "Administered Drug Strength Volume",
      required: "O",
      repeat: "1",
    },
    "RXA.24": {
      name: "Administered Drug Strength Volume Units",
      required: "O",
      repeat: "1",
    },
    "RXA.25": {
      name: "Administered Barcode Identifier",
      required: "O",
      repeat: "1",
    },
    "RXA.26": {
      name: "Pharmacy Order Type",
      required: "O",
      repeat: "1",
    },
  },
  RXC: {
    "RXC.1": {
      name: "RX Component Type",
      required: "R",
      repeat: "1",
    },
    "RXC.2": {
      name: "Component Code",
      required: "R",
      repeat: "1",
    },
    "RXC.3": {
      name: "Component Amount",
      required: "R",
      repeat: "1",
    },
    "RXC.4": {
      name: "Component Units",
      required: "R",
      repeat: "1",
    },
    "RXC.5": {
      name: "Component Strength",
      required: "O",
      repeat: "1",
    },
    "RXC.6": {
      name: "Component Strength Units",
      required: "O",
      repeat: "1",
    },
    "RXC.7": {
      name: "Supplementary Code",
      required: "O",
      repeat: "∞",
    },
    "RXC.8": {
      name: "Component Drug Strength Volume",
      required: "O",
      repeat: "1",
    },
    "RXC.9": {
      name: "Component Drug Strength Volume Units",
      required: "O",
      repeat: "1",
    },
  },
  RXD: {
    "RXD.1": {
      name: "Dispense Sub-ID Counter",
      required: "R",
      repeat: "1",
    },
    "RXD.2": {
      name: "Dispense/Give Code",
      required: "R",
      repeat: "1",
    },
    "RXD.3": {
      name: "Date/Time Dispensed",
      required: "R",
      repeat: "1",
    },
    "RXD.4": {
      name: "Actual Dispense Amount",
      required: "R",
      repeat: "1",
    },
    "RXD.5": {
      name: "Actual Dispense Units",
      required: "C",
      repeat: "1",
    },
    "RXD.6": {
      name: "Actual Dosage Form",
      required: "O",
      repeat: "1",
    },
    "RXD.7": {
      name: "Prescription Number",
      required: "R",
      repeat: "1",
    },
    "RXD.8": {
      name: "Number of Refills Remaining",
      required: "C",
      repeat: "1",
    },
    "RXD.9": {
      name: "Dispense Notes",
      required: "O",
      repeat: "∞",
    },
    "RXD.10": {
      name: "Dispensing Provider",
      required: "O",
      repeat: "∞",
    },
    "RXD.11": {
      name: "Substitution Status",
      required: "O",
      repeat: "1",
    },
    "RXD.12": {
      name: "Total Daily Dose",
      required: "O",
      repeat: "1",
    },
    "RXD.13": {
      name: "Dispense-to Location",
      required: "C",
      repeat: "1",
    },
    "RXD.14": {
      name: "Needs Human Review",
      required: "O",
      repeat: "1",
    },
    "RXD.15": {
      name: "Pharmacy/Treatment Supplier's Special Dispensing Instructions",
      required: "O",
      repeat: "∞",
    },
    "RXD.16": {
      name: "Actual Strength",
      required: "O",
      repeat: "1",
    },
    "RXD.17": {
      name: "Actual Strength Unit",
      required: "O",
      repeat: "1",
    },
    "RXD.18": {
      name: "Substance Lot Number",
      required: "O",
      repeat: "∞",
    },
    "RXD.19": {
      name: "Substance Expiration Date",
      required: "O",
      repeat: "∞",
    },
    "RXD.20": {
      name: "Substance Manufacturer Name",
      required: "O",
      repeat: "∞",
    },
    "RXD.21": {
      name: "Indication",
      required: "O",
      repeat: "∞",
    },
    "RXD.22": {
      name: "Dispense Package Size",
      required: "O",
      repeat: "1",
    },
    "RXD.23": {
      name: "Dispense Package Size Unit",
      required: "O",
      repeat: "1",
    },
    "RXD.24": {
      name: "Dispense Package Method",
      required: "O",
      repeat: "1",
    },
    "RXD.25": {
      name: "Supplementary Code",
      required: "O",
      repeat: "∞",
    },
    "RXD.26": {
      name: "Initiating Location",
      required: "O",
      repeat: "1",
    },
    "RXD.27": {
      name: "Packaging/Assembly Location",
      required: "O",
      repeat: "1",
    },
    "RXD.28": {
      name: "Actual Drug Strength Volume",
      required: "O",
      repeat: "1",
    },
    "RXD.29": {
      name: "Actual Drug Strength Volume Units",
      required: "O",
      repeat: "1",
    },
    "RXD.30": {
      name: "Dispense to Pharmacy",
      required: "O",
      repeat: "1",
    },
    "RXD.31": {
      name: "Dispense to Pharmacy Address",
      required: "O",
      repeat: "1",
    },
    "RXD.32": {
      name: "Pharmacy Order Type",
      required: "O",
      repeat: "1",
    },
    "RXD.33": {
      name: "Dispense Type",
      required: "O",
      repeat: "1",
    },
  },
  RXE: {
    "RXE.1": {
      name: "Quantity/Timing",
      required: "B",
      repeat: "1",
    },
    "RXE.2": {
      name: "Give Code",
      required: "R",
      repeat: "1",
    },
    "RXE.3": {
      name: "Give Amount - Minimum",
      required: "R",
      repeat: "1",
    },
    "RXE.4": {
      name: "Give Amount - Maximum",
      required: "O",
      repeat: "1",
    },
    "RXE.5": {
      name: "Give Units",
      required: "R",
      repeat: "1",
    },
    "RXE.6": {
      name: "Give Dosage Form",
      required: "O",
      repeat: "1",
    },
    "RXE.7": {
      name: "Provider's Administration Instructions",
      required: "O",
      repeat: "∞",
    },
    "RXE.8": {
      name: "Deliver-To Location",
      required: "B",
      repeat: "1",
    },
    "RXE.9": {
      name: "Substitution Status",
      required: "O",
      repeat: "1",
    },
    "RXE.10": {
      name: "Dispense Amount",
      required: "C",
      repeat: "1",
    },
    "RXE.11": {
      name: "Dispense Units",
      required: "C",
      repeat: "1",
    },
    "RXE.12": {
      name: "Number Of Refills",
      required: "O",
      repeat: "1",
    },
    "RXE.13": {
      name: "Ordering Provider's DEA Number",
      required: "C",
      repeat: "∞",
    },
    "RXE.14": {
      name: "Pharmacist/Treatment Supplier's Verifier ID",
      required: "O",
      repeat: "∞",
    },
    "RXE.15": {
      name: "Prescription Number",
      required: "C",
      repeat: "1",
    },
    "RXE.16": {
      name: "Number of Refills Remaining",
      required: "C",
      repeat: "1",
    },
    "RXE.17": {
      name: "Number of Refills/Doses Dispensed",
      required: "C",
      repeat: "1",
    },
    "RXE.18": {
      name: "D/T of Most Recent Refill or Dose Dispensed",
      required: "C",
      repeat: "1",
    },
    "RXE.19": {
      name: "Total Daily Dose",
      required: "C",
      repeat: "1",
    },
    "RXE.20": {
      name: "Needs Human Review",
      required: "O",
      repeat: "1",
    },
    "RXE.21": {
      name: "Pharmacy/Treatment Supplier's Special Dispensing Instructions",
      required: "O",
      repeat: "∞",
    },
    "RXE.22": {
      name: "Give Per (Time Units)",
      required: "C",
      repeat: "1",
    },
    "RXE.23": {
      name: "Give Rate Amount",
      required: "O",
      repeat: "1",
    },
    "RXE.24": {
      name: "Give Rate Units",
      required: "O",
      repeat: "1",
    },
    "RXE.25": {
      name: "Give Strength",
      required: "O",
      repeat: "1",
    },
    "RXE.26": {
      name: "Give Strength Units",
      required: "O",
      repeat: "1",
    },
    "RXE.27": {
      name: "Give Indication",
      required: "O",
      repeat: "∞",
    },
    "RXE.28": {
      name: "Dispense Package Size",
      required: "O",
      repeat: "1",
    },
    "RXE.29": {
      name: "Dispense Package Size Unit",
      required: "O",
      repeat: "1",
    },
    "RXE.30": {
      name: "Dispense Package Method",
      required: "O",
      repeat: "1",
    },
    "RXE.31": {
      name: "Supplementary Code",
      required: "O",
      repeat: "∞",
    },
    "RXE.32": {
      name: "Original Order Date/Time",
      required: "O",
      repeat: "1",
    },
    "RXE.33": {
      name: "Give Drug Strength Volume",
      required: "O",
      repeat: "1",
    },
    "RXE.34": {
      name: "Give Drug Strength Volume Units",
      required: "O",
      repeat: "1",
    },
    "RXE.35": {
      name: "Controlled Substance Schedule",
      required: "O",
      repeat: "1",
    },
    "RXE.36": {
      name: "Formulary Status",
      required: "O",
      repeat: "1",
    },
    "RXE.37": {
      name: "Pharmaceutical Substance Alternative",
      required: "O",
      repeat: "∞",
    },
    "RXE.38": {
      name: "Pharmacy of Most Recent Fill",
      required: "O",
      repeat: "1",
    },
    "RXE.39": {
      name: "Initial Dispense Amount",
      required: "O",
      repeat: "1",
    },
    "RXE.40": {
      name: "Dispensing Pharmacy",
      required: "O",
      repeat: "1",
    },
    "RXE.41": {
      name: "Dispensing Pharmacy Address",
      required: "O",
      repeat: "1",
    },
    "RXE.42": {
      name: "Deliver-to Patient Location",
      required: "O",
      repeat: "1",
    },
    "RXE.43": {
      name: "Deliver-to Address",
      required: "O",
      repeat: "1",
    },
    "RXE.44": {
      name: "Pharmacy Order Type",
      required: "O",
      repeat: "1",
    },
  },
  RXG: {
    "RXG.1": {
      name: "Give Sub-ID Counter",
      required: "R",
      repeat: "1",
    },
    "RXG.2": {
      name: "Dispense Sub-ID Counter",
      required: "O",
      repeat: "1",
    },
    "RXG.3": {
      name: "Quantity/Timing",
      required: "B",
      repeat: "1",
    },
    "RXG.4": {
      name: "Give Code",
      required: "R",
      repeat: "1",
    },
    "RXG.5": {
      name: "Give Amount - Minimum",
      required: "R",
      repeat: "1",
    },
    "RXG.6": {
      name: "Give Amount - Maximum",
      required: "O",
      repeat: "1",
    },
    "RXG.7": {
      name: "Give Units",
      required: "R",
      repeat: "1",
    },
    "RXG.8": {
      name: "Give Dosage Form",
      required: "O",
      repeat: "1",
    },
    "RXG.9": {
      name: "Administration Notes",
      required: "O",
      repeat: "∞",
    },
    "RXG.10": {
      name: "Substitution Status",
      required: "O",
      repeat: "1",
    },
    "RXG.11": {
      name: "Dispense-to Location",
      required: "O",
      repeat: "1",
    },
    "RXG.12": {
      name: "Needs Human Review",
      required: "O",
      repeat: "1",
    },
    "RXG.13": {
      name: "Pharmacy/Treatment Supplier's Special Administration Instructions",
      required: "O",
      repeat: "∞",
    },
    "RXG.14": {
      name: "Give Per (Time Unit)",
      required: "C",
      repeat: "1",
    },
    "RXG.15": {
      name: "Give Rate Amount",
      required: "O",
      repeat: "1",
    },
    "RXG.16": {
      name: "Give Rate Units",
      required: "O",
      repeat: "1",
    },
    "RXG.17": {
      name: "Give Strength",
      required: "O",
      repeat: "1",
    },
    "RXG.18": {
      name: "Give Strength Units",
      required: "O",
      repeat: "1",
    },
    "RXG.19": {
      name: "Substance Lot Number",
      required: "O",
      repeat: "∞",
    },
    "RXG.20": {
      name: "Substance Expiration Date",
      required: "O",
      repeat: "∞",
    },
    "RXG.21": {
      name: "Substance Manufacturer Name",
      required: "O",
      repeat: "∞",
    },
    "RXG.22": {
      name: "Indication",
      required: "O",
      repeat: "∞",
    },
    "RXG.23": {
      name: "Give Drug Strength Volume",
      required: "O",
      repeat: "1",
    },
    "RXG.24": {
      name: "Give Drug Strength Volume Units",
      required: "O",
      repeat: "1",
    },
    "RXG.25": {
      name: "Give Barcode Identifier",
      required: "O",
      repeat: "1",
    },
    "RXG.26": {
      name: "Pharmacy Order Type",
      required: "O",
      repeat: "1",
    },
  },
  RXO: {
    "RXO.1": {
      name: "Requested Give Code",
      required: "C",
      repeat: "1",
    },
    "RXO.2": {
      name: "Requested Give Amount - Minimum",
      required: "C",
      repeat: "1",
    },
    "RXO.3": {
      name: "Requested Give Amount - Maximum",
      required: "O",
      repeat: "1",
    },
    "RXO.4": {
      name: "Requested Give Units",
      required: "C",
      repeat: "1",
    },
    "RXO.5": {
      name: "Requested Dosage Form",
      required: "C",
      repeat: "1",
    },
    "RXO.6": {
      name: "Provider's Pharmacy/Treatment Instructions",
      required: "O",
      repeat: "∞",
    },
    "RXO.7": {
      name: "Provider's Administration Instructions",
      required: "O",
      repeat: "∞",
    },
    "RXO.8": {
      name: "Deliver-To Location",
      required: "O",
      repeat: "1",
    },
    "RXO.9": {
      name: "Allow Substitutions",
      required: "O",
      repeat: "1",
    },
    "RXO.10": {
      name: "Requested Dispense Code",
      required: "O",
      repeat: "1",
    },
    "RXO.11": {
      name: "Requested Dispense Amount",
      required: "O",
      repeat: "1",
    },
    "RXO.12": {
      name: "Requested Dispense Units",
      required: "O",
      repeat: "1",
    },
    "RXO.13": {
      name: "Number Of Refills",
      required: "O",
      repeat: "1",
    },
    "RXO.14": {
      name: "Ordering Provider's DEA Number",
      required: "C",
      repeat: "∞",
    },
    "RXO.15": {
      name: "Pharmacist/Treatment Supplier's Verifier ID",
      required: "C",
      repeat: "∞",
    },
    "RXO.16": {
      name: "Needs Human Review",
      required: "O",
      repeat: "1",
    },
    "RXO.17": {
      name: "Requested Give Per (Time Unit)",
      required: "C",
      repeat: "1",
    },
    "RXO.18": {
      name: "Requested Give Strength",
      required: "O",
      repeat: "1",
    },
    "RXO.19": {
      name: "Requested Give Strength Units",
      required: "O",
      repeat: "1",
    },
    "RXO.20": {
      name: "Indication",
      required: "O",
      repeat: "∞",
    },
    "RXO.21": {
      name: "Requested Give Rate Amount",
      required: "O",
      repeat: "1",
    },
    "RXO.22": {
      name: "Requested Give Rate Units",
      required: "O",
      repeat: "1",
    },
    "RXO.23": {
      name: "Total Daily Dose",
      required: "O",
      repeat: "1",
    },
    "RXO.24": {
      name: "Supplementary Code",
      required: "O",
      repeat: "∞",
    },
    "RXO.25": {
      name: "Requested Drug Strength Volume",
      required: "O",
      repeat: "1",
    },
    "RXO.26": {
      name: "Requested Drug Strength Volume Units",
      required: "O",
      repeat: "1",
    },
    "RXO.27": {
      name: "Pharmacy Order Type",
      required: "O",
      repeat: "1",
    },
    "RXO.28": {
      name: "Dispensing Interval",
      required: "O",
      repeat: "1",
    },
  },
  RXR: {
    "RXR.1": {
      name: "Route",
      required: "R",
      repeat: "1",
    },
    "RXR.2": {
      name: "Administration Site",
      required: "O",
      repeat: "1",
    },
    "RXR.3": {
      name: "Administration Device",
      required: "O",
      repeat: "1",
    },
    "RXR.4": {
      name: "Administration Method",
      required: "O",
      repeat: "1",
    },
    "RXR.5": {
      name: "Routing Instruction",
      required: "O",
      repeat: "1",
    },
    "RXR.6": {
      name: "Administration Site Modifier",
      required: "O",
      repeat: "1",
    },
  },
  SAC: {
    "SAC.1": {
      name: "External Accession Identifier",
      required: "O",
      repeat: "1",
    },
    "SAC.2": {
      name: "Accession Identifier",
      required: "O",
      repeat: "1",
    },
    "SAC.3": {
      name: "Container Identifier",
      required: "C",
      repeat: "1",
    },
    "SAC.4": {
      name: "Primary (parent) Container Identifier ",
      required: "C",
      repeat: "1",
    },
    "SAC.5": {
      name: "Equipment Container Identifier",
      required: "O",
      repeat: "1",
    },
    "SAC.6": {
      name: "Specimen Source",
      required: "C",
      repeat: "1",
    },
    "SAC.7": {
      name: "Registration Date/Time",
      required: "O",
      repeat: "1",
    },
    "SAC.8": {
      name: "Container Status",
      required: "O",
      repeat: "1",
    },
    "SAC.9": {
      name: "Carrier Type",
      required: "O",
      repeat: "1",
    },
    "SAC.10": {
      name: "Carrier Identifier",
      required: "O",
      repeat: "1",
    },
    "SAC.11": {
      name: "Position in Carrier",
      required: "O",
      repeat: "1",
    },
    "SAC.12": {
      name: "Tray Type - SAC",
      required: "O",
      repeat: "1",
    },
    "SAC.13": {
      name: "Tray Identifier",
      required: "O",
      repeat: "1",
    },
    "SAC.14": {
      name: "Position in Tray",
      required: "O",
      repeat: "1",
    },
    "SAC.15": {
      name: "Location",
      required: "O",
      repeat: "∞",
    },
    "SAC.16": {
      name: "Container Height",
      required: "O",
      repeat: "1",
    },
    "SAC.17": {
      name: "Container Diameter",
      required: "O",
      repeat: "1",
    },
    "SAC.18": {
      name: "Barrier Delta",
      required: "O",
      repeat: "1",
    },
    "SAC.19": {
      name: "Bottom Delta",
      required: "O",
      repeat: "1",
    },
    "SAC.20": {
      name: "Container Height/Diameter/Delta Units",
      required: "O",
      repeat: "1",
    },
    "SAC.21": {
      name: "Container Volume",
      required: "O",
      repeat: "1",
    },
    "SAC.22": {
      name: "Available Specimen Volume",
      required: "O",
      repeat: "1",
    },
    "SAC.23": {
      name: "Initial Specimen Volume",
      required: "O",
      repeat: "1",
    },
    "SAC.24": {
      name: "Volume Units",
      required: "O",
      repeat: "1",
    },
    "SAC.25": {
      name: "Separator Type",
      required: "O",
      repeat: "1",
    },
    "SAC.26": {
      name: "Cap Type",
      required: "O",
      repeat: "1",
    },
    "SAC.27": {
      name: "Additive",
      required: "O",
      repeat: "∞",
    },
    "SAC.28": {
      name: "Specimen Component",
      required: "O",
      repeat: "1",
    },
    "SAC.29": {
      name: "Dilution Factor",
      required: "O",
      repeat: "1",
    },
    "SAC.30": {
      name: "Treatment",
      required: "O",
      repeat: "1",
    },
    "SAC.31": {
      name: "Temperature",
      required: "O",
      repeat: "1",
    },
    "SAC.32": {
      name: "Hemolysis Index",
      required: "O",
      repeat: "1",
    },
    "SAC.33": {
      name: "Hemolysis Index Units",
      required: "O",
      repeat: "1",
    },
    "SAC.34": {
      name: "Lipemia Index",
      required: "O",
      repeat: "1",
    },
    "SAC.35": {
      name: "Lipemia Index Units",
      required: "O",
      repeat: "1",
    },
    "SAC.36": {
      name: "Icterus Index",
      required: "O",
      repeat: "1",
    },
    "SAC.37": {
      name: "Icterus Index Units",
      required: "O",
      repeat: "1",
    },
    "SAC.38": {
      name: "Fibrin Index",
      required: "O",
      repeat: "1",
    },
    "SAC.39": {
      name: "Fibrin Index Units",
      required: "O",
      repeat: "1",
    },
    "SAC.40": {
      name: "System Induced Contaminants",
      required: "O",
      repeat: "∞",
    },
    "SAC.41": {
      name: "Drug Interference",
      required: "O",
      repeat: "∞",
    },
    "SAC.42": {
      name: "Artificial Blood",
      required: "O",
      repeat: "1",
    },
    "SAC.43": {
      name: "Special Handling Code",
      required: "O",
      repeat: "∞",
    },
    "SAC.44": {
      name: "Other Environmental Factors",
      required: "O",
      repeat: "∞",
    },
  },
  SCH: {
    "SCH.1": {
      name: "Placer Appointment ID",
      required: "C",
      repeat: "1",
    },
    "SCH.2": {
      name: "Filler Appointment ID",
      required: "C",
      repeat: "1",
    },
    "SCH.3": {
      name: "Occurrence Number",
      required: "C",
      repeat: "1",
    },
    "SCH.4": {
      name: "Placer Group Number",
      required: "O",
      repeat: "1",
    },
    "SCH.5": {
      name: "Schedule ID",
      required: "O",
      repeat: "1",
    },
    "SCH.6": {
      name: "Event Reason",
      required: "R",
      repeat: "1",
    },
    "SCH.7": {
      name: "Appointment Reason",
      required: "O",
      repeat: "1",
    },
    "SCH.8": {
      name: "Appointment Type",
      required: "O",
      repeat: "1",
    },
    "SCH.9": {
      name: "Appointment Duration",
      required: "B",
      repeat: "1",
    },
    "SCH.10": {
      name: "Appointment Duration Units",
      required: "B",
      repeat: "1",
    },
    "SCH.11": {
      name: "Appointment Timing Quantity",
      required: "B",
      repeat: "∞",
    },
    "SCH.12": {
      name: "Placer Contact Person",
      required: "O",
      repeat: "∞",
    },
    "SCH.13": {
      name: "Placer Contact Phone Number",
      required: "O",
      repeat: "1",
    },
    "SCH.14": {
      name: "Placer Contact Address",
      required: "O",
      repeat: "∞",
    },
    "SCH.15": {
      name: "Placer Contact Location",
      required: "O",
      repeat: "1",
    },
    "SCH.16": {
      name: "Filler Contact Person",
      required: "R",
      repeat: "∞",
    },
    "SCH.17": {
      name: "Filler Contact Phone Number",
      required: "O",
      repeat: "1",
    },
    "SCH.18": {
      name: "Filler Contact Address",
      required: "O",
      repeat: "∞",
    },
    "SCH.19": {
      name: "Filler Contact Location",
      required: "O",
      repeat: "1",
    },
    "SCH.20": {
      name: "Entered By Person",
      required: "R",
      repeat: "∞",
    },
    "SCH.21": {
      name: "Entered By Phone Number",
      required: "O",
      repeat: "∞",
    },
    "SCH.22": {
      name: "Entered By Location",
      required: "O",
      repeat: "1",
    },
    "SCH.23": {
      name: "Parent Placer Appointment ID",
      required: "O",
      repeat: "1",
    },
    "SCH.24": {
      name: "Parent Filler Appointment ID",
      required: "C",
      repeat: "1",
    },
    "SCH.25": {
      name: "Filler Status Code",
      required: "O",
      repeat: "1",
    },
    "SCH.26": {
      name: "Placer Order Number",
      required: "C",
      repeat: "∞",
    },
    "SCH.27": {
      name: "Filler Order Number",
      required: "C",
      repeat: "∞",
    },
  },
  SFT: {
    "SFT.1": {
      name: "Software Vendor Organization",
      required: "R",
      repeat: "1",
    },
    "SFT.2": {
      name: "Software Certified Version or Release Number",
      required: "R",
      repeat: "1",
    },
    "SFT.3": {
      name: "Software Product Name",
      required: "R",
      repeat: "1",
    },
    "SFT.4": {
      name: "Software Binary ID",
      required: "R",
      repeat: "1",
    },
    "SFT.5": {
      name: "Software Product Information",
      required: "O",
      repeat: "1",
    },
    "SFT.6": {
      name: "Software Install Date",
      required: "O",
      repeat: "1",
    },
  },
  SID: {
    "SID.1": {
      name: "Application / Method Identifier",
      required: "C",
      repeat: "1",
    },
    "SID.2": {
      name: "Substance Lot Number",
      required: "C",
      repeat: "1",
    },
    "SID.3": {
      name: "Substance Container Identifier",
      required: "C",
      repeat: "1",
    },
    "SID.4": {
      name: "Substance Manufacturer Identifier",
      required: "C",
      repeat: "1",
    },
  },
  SPM: {
    "SPM.1": {
      name: "Set ID - SPM",
      required: "O",
      repeat: "1",
    },
    "SPM.2": {
      name: "Specimen ID",
      required: "O",
      repeat: "1",
    },
    "SPM.3": {
      name: "Specimen Parent IDs",
      required: "O",
      repeat: "∞",
    },
    "SPM.4": {
      name: "Specimen Type",
      required: "R",
      repeat: "1",
    },
    "SPM.5": {
      name: "Specimen Type Modifier",
      required: "O",
      repeat: "∞",
    },
    "SPM.6": {
      name: "Specimen Additives",
      required: "O",
      repeat: "∞",
    },
    "SPM.7": {
      name: "Specimen Collection Method",
      required: "O",
      repeat: "1",
    },
    "SPM.8": {
      name: "Specimen Source Site",
      required: "O",
      repeat: "1",
    },
    "SPM.9": {
      name: "Specimen Source Site Modifier",
      required: "O",
      repeat: "∞",
    },
    "SPM.10": {
      name: "Specimen Collection Site",
      required: "O",
      repeat: "1",
    },
    "SPM.11": {
      name: "Specimen Role",
      required: "O",
      repeat: "∞",
    },
    "SPM.12": {
      name: "Specimen Collection Amount",
      required: "O",
      repeat: "1",
    },
    "SPM.13": {
      name: "Grouped Specimen Count",
      required: "C",
      repeat: "1",
    },
    "SPM.14": {
      name: "Specimen Description",
      required: "O",
      repeat: "∞",
    },
    "SPM.15": {
      name: "Specimen Handling Code",
      required: "O",
      repeat: "∞",
    },
    "SPM.16": {
      name: "Specimen Risk Code",
      required: "O",
      repeat: "∞",
    },
    "SPM.17": {
      name: "Specimen Collection Date/Time",
      required: "O",
      repeat: "1",
    },
    "SPM.18": {
      name: "Specimen Received Date/Time",
      required: "O",
      repeat: "1",
    },
    "SPM.19": {
      name: "Specimen Expiration Date/Time",
      required: "O",
      repeat: "1",
    },
    "SPM.20": {
      name: "Specimen Availability",
      required: "O",
      repeat: "1",
    },
    "SPM.21": {
      name: "Specimen Reject Reason",
      required: "O",
      repeat: "∞",
    },
    "SPM.22": {
      name: "Specimen Quality",
      required: "O",
      repeat: "1",
    },
    "SPM.23": {
      name: "Specimen Appropriateness",
      required: "O",
      repeat: "1",
    },
    "SPM.24": {
      name: "Specimen Condition",
      required: "O",
      repeat: "∞",
    },
    "SPM.25": {
      name: "Specimen Current Quantity",
      required: "O",
      repeat: "1",
    },
    "SPM.26": {
      name: "Number of Specimen Containers",
      required: "O",
      repeat: "1",
    },
    "SPM.27": {
      name: "Container Type",
      required: "O",
      repeat: "1",
    },
    "SPM.28": {
      name: "Container Condition",
      required: "O",
      repeat: "1",
    },
    "SPM.29": {
      name: "Specimen Child Role",
      required: "O",
      repeat: "1",
    },
  },
  SPR: {
    "SPR.1": {
      name: "Query Tag",
      required: "O",
      repeat: "1",
    },
    "SPR.2": {
      name: "Query/Response Format Code",
      required: "R",
      repeat: "1",
    },
    "SPR.3": {
      name: "Stored Procedure Name",
      required: "R",
      repeat: "1",
    },
    "SPR.4": {
      name: "Input Parameter List",
      required: "O",
      repeat: "∞",
    },
  },
  STF: {
    "STF.1": {
      name: "Primary Key Value - STF",
      required: "C",
      repeat: "1",
    },
    "STF.2": {
      name: "Staff Identifier List",
      required: "O",
      repeat: "∞",
    },
    "STF.3": {
      name: "Staff Name",
      required: "O",
      repeat: "∞",
    },
    "STF.4": {
      name: "Staff Type",
      required: "O",
      repeat: "∞",
    },
    "STF.5": {
      name: "Administrative Sex",
      required: "O",
      repeat: "1",
    },
    "STF.6": {
      name: "Date/Time of Birth",
      required: "O",
      repeat: "1",
    },
    "STF.7": {
      name: "Active/Inactive Flag",
      required: "O",
      repeat: "1",
    },
    "STF.8": {
      name: "Department",
      required: "O",
      repeat: "∞",
    },
    "STF.9": {
      name: "Hospital Service - STF",
      required: "O",
      repeat: "∞",
    },
    "STF.10": {
      name: "Phone",
      required: "O",
      repeat: "∞",
    },
    "STF.11": {
      name: "Office/Home Address/Birthplace",
      required: "O",
      repeat: "∞",
    },
    "STF.12": {
      name: "Institution Activation Date",
      required: "O",
      repeat: "∞",
    },
    "STF.13": {
      name: "Institution Inactivation Date",
      required: "O",
      repeat: "∞",
    },
    "STF.14": {
      name: "Backup Person ID",
      required: "O",
      repeat: "∞",
    },
    "STF.15": {
      name: "E-Mail Address",
      required: "O",
      repeat: "∞",
    },
    "STF.16": {
      name: "Preferred Method of Contact",
      required: "O",
      repeat: "1",
    },
    "STF.17": {
      name: "Marital Status",
      required: "O",
      repeat: "1",
    },
    "STF.18": {
      name: "Job Title",
      required: "O",
      repeat: "1",
    },
    "STF.19": {
      name: "Job Code/Class",
      required: "O",
      repeat: "1",
    },
    "STF.20": {
      name: "Employment Status Code",
      required: "O",
      repeat: "1",
    },
    "STF.21": {
      name: "Additional Insured on Auto",
      required: "O",
      repeat: "1",
    },
    "STF.22": {
      name: "Driver's License Number - Staff",
      required: "O",
      repeat: "1",
    },
    "STF.23": {
      name: "Copy Auto Ins",
      required: "O",
      repeat: "1",
    },
    "STF.24": {
      name: "Auto Ins. Expires",
      required: "O",
      repeat: "1",
    },
    "STF.25": {
      name: "Date Last DMV Review",
      required: "O",
      repeat: "1",
    },
    "STF.26": {
      name: "Date Next DMV Review",
      required: "O",
      repeat: "1",
    },
    "STF.27": {
      name: "Race",
      required: "O",
      repeat: "1",
    },
    "STF.28": {
      name: "Ethnic Group",
      required: "O",
      repeat: "1",
    },
    "STF.29": {
      name: "Re-activation Approval Indicator",
      required: "O",
      repeat: "1",
    },
    "STF.30": {
      name: "Citizenship",
      required: "O",
      repeat: "∞",
    },
    "STF.31": {
      name: "Death Date and Time",
      required: "O",
      repeat: "1",
    },
    "STF.32": {
      name: "Death Indicator",
      required: "O",
      repeat: "1",
    },
    "STF.33": {
      name: "Institution Relationship Type Code",
      required: "O",
      repeat: "1",
    },
    "STF.34": {
      name: "Institution Relationship Period",
      required: "O",
      repeat: "1",
    },
    "STF.35": {
      name: "Expected Return Date",
      required: "O",
      repeat: "1",
    },
    "STF.36": {
      name: "Cost Center Code",
      required: "O",
      repeat: "∞",
    },
    "STF.37": {
      name: "Generic Classification Indicator",
      required: "O",
      repeat: "1",
    },
    "STF.38": {
      name: "Inactive Reason Code",
      required: "O",
      repeat: "1",
    },
  },
  TCC: {
    "TCC.1": {
      name: "Universal Service Identifier",
      required: "R",
      repeat: "1",
    },
    "TCC.2": {
      name: "Test Application Identifier",
      required: "R",
      repeat: "1",
    },
    "TCC.3": {
      name: "Specimen Source",
      required: "B",
      repeat: "1",
    },
    "TCC.4": {
      name: "Auto-Dilution Factor Default",
      required: "O",
      repeat: "1",
    },
    "TCC.5": {
      name: "Rerun Dilution Factor Default",
      required: "O",
      repeat: "1",
    },
    "TCC.6": {
      name: "Pre-Dilution Factor Default",
      required: "O",
      repeat: "1",
    },
    "TCC.7": {
      name: "Endogenous Content of Pre-Dilution Diluent",
      required: "O",
      repeat: "1",
    },
    "TCC.8": {
      name: "Inventory Limits Warning Level",
      required: "O",
      repeat: "1",
    },
    "TCC.9": {
      name: "Automatic Rerun Allowed",
      required: "O",
      repeat: "1",
    },
    "TCC.10": {
      name: "Automatic Repeat Allowed",
      required: "O",
      repeat: "1",
    },
    "TCC.11": {
      name: "Automatic Reflex Allowed",
      required: "O",
      repeat: "1",
    },
    "TCC.12": {
      name: "Equipment Dynamic Range",
      required: "O",
      repeat: "1",
    },
    "TCC.13": {
      name: "Units",
      required: "O",
      repeat: "1",
    },
    "TCC.14": {
      name: "Processing Type",
      required: "O",
      repeat: "1",
    },
  },
  TCD: {
    "TCD.1": {
      name: "Universal Service Identifier",
      required: "R",
      repeat: "1",
    },
    "TCD.2": {
      name: "Auto-Dilution Factor",
      required: "O",
      repeat: "1",
    },
    "TCD.3": {
      name: "Rerun Dilution Factor",
      required: "O",
      repeat: "1",
    },
    "TCD.4": {
      name: "Pre-Dilution Factor",
      required: "O",
      repeat: "1",
    },
    "TCD.5": {
      name: "Endogenous Content of Pre-Dilution Diluent",
      required: "O",
      repeat: "1",
    },
    "TCD.6": {
      name: "Automatic Repeat Allowed",
      required: "O",
      repeat: "1",
    },
    "TCD.7": {
      name: "Reflex Allowed",
      required: "O",
      repeat: "1",
    },
    "TCD.8": {
      name: "Analyte Repeat Status",
      required: "O",
      repeat: "1",
    },
  },
  TQ1: {
    "TQ1.1": {
      name: "Set ID - TQ1",
      required: "O",
      repeat: "1",
    },
    "TQ1.2": {
      name: "Quantity",
      required: "O",
      repeat: "1",
    },
    "TQ1.3": {
      name: "Repeat Pattern",
      required: "O",
      repeat: "∞",
    },
    "TQ1.4": {
      name: "Explicit Time",
      required: "O",
      repeat: "∞",
    },
    "TQ1.5": {
      name: "Relative Time and Units",
      required: "O",
      repeat: "∞",
    },
    "TQ1.6": {
      name: "Service Duration",
      required: "O",
      repeat: "1",
    },
    "TQ1.7": {
      name: "Start date/time",
      required: "O",
      repeat: "1",
    },
    "TQ1.8": {
      name: "End date/time",
      required: "O",
      repeat: "1",
    },
    "TQ1.9": {
      name: "Priority",
      required: "O",
      repeat: "∞",
    },
    "TQ1.10": {
      name: "Condition text",
      required: "O",
      repeat: "1",
    },
    "TQ1.11": {
      name: "Text instruction",
      required: "O",
      repeat: "1",
    },
    "TQ1.12": {
      name: "Conjunction",
      required: "C",
      repeat: "1",
    },
    "TQ1.13": {
      name: "Occurrence duration",
      required: "O",
      repeat: "1",
    },
    "TQ1.14": {
      name: "Total occurrences",
      required: "O",
      repeat: "1",
    },
  },
  TQ2: {
    "TQ2.1": {
      name: "Set ID - TQ2",
      required: "O",
      repeat: "1",
    },
    "TQ2.2": {
      name: "Sequence/Results Flag",
      required: "O",
      repeat: "1",
    },
    "TQ2.3": {
      name: "Related Placer Number",
      required: "C",
      repeat: "∞",
    },
    "TQ2.4": {
      name: "Related Filler Number",
      required: "C",
      repeat: "∞",
    },
    "TQ2.5": {
      name: "Related Placer Group Number",
      required: "C",
      repeat: "∞",
    },
    "TQ2.6": {
      name: "Sequence Condition Code",
      required: "C",
      repeat: "1",
    },
    "TQ2.7": {
      name: "Cyclic Entry/Exit Indicator",
      required: "C",
      repeat: "1",
    },
    "TQ2.8": {
      name: "Sequence Condition Time Interval",
      required: "O",
      repeat: "1",
    },
    "TQ2.9": {
      name: "Cyclic Group Maximum Number of Repeats",
      required: "O",
      repeat: "1",
    },
    "TQ2.10": {
      name: "Special Service Request Relationship",
      required: "C",
      repeat: "1",
    },
  },
  TXA: {
    "TXA.1": {
      name: "Set ID - TXA",
      required: "R",
      repeat: "1",
    },
    "TXA.2": {
      name: "Document Type",
      required: "R",
      repeat: "1",
    },
    "TXA.3": {
      name: "Document Content Presentation",
      required: "C",
      repeat: "1",
    },
    "TXA.4": {
      name: "Activity Date/Time",
      required: "O",
      repeat: "1",
    },
    "TXA.5": {
      name: "Primary Activity Provider Code/Name",
      required: "C",
      repeat: "∞",
    },
    "TXA.6": {
      name: "Origination Date/Time",
      required: "O",
      repeat: "1",
    },
    "TXA.7": {
      name: "Transcription Date/Time",
      required: "C",
      repeat: "1",
    },
    "TXA.8": {
      name: "Edit Date/Time",
      required: "O",
      repeat: "∞",
    },
    "TXA.9": {
      name: "Originator Code/Name",
      required: "O",
      repeat: "∞",
    },
    "TXA.10": {
      name: "Assigned Document Authenticator",
      required: "O",
      repeat: "∞",
    },
    "TXA.11": {
      name: "Transcriptionist Code/Name",
      required: "C",
      repeat: "∞",
    },
    "TXA.12": {
      name: "Unique Document Number",
      required: "R",
      repeat: "1",
    },
    "TXA.13": {
      name: "Parent Document Number",
      required: "C",
      repeat: "1",
    },
    "TXA.14": {
      name: "Placer Order Number",
      required: "O",
      repeat: "∞",
    },
    "TXA.15": {
      name: "Filler Order Number",
      required: "O",
      repeat: "1",
    },
    "TXA.16": {
      name: "Unique Document File Name",
      required: "O",
      repeat: "1",
    },
    "TXA.17": {
      name: "Document Completion Status",
      required: "R",
      repeat: "1",
    },
    "TXA.18": {
      name: "Document Confidentiality Status",
      required: "O",
      repeat: "1",
    },
    "TXA.19": {
      name: "Document Availability Status",
      required: "O",
      repeat: "1",
    },
    "TXA.20": {
      name: "Document Storage Status",
      required: "O",
      repeat: "1",
    },
    "TXA.21": {
      name: "Document Change Reason",
      required: "C",
      repeat: "1",
    },
    "TXA.22": {
      name: "Authentication Person, Time Stamp",
      required: "C",
      repeat: "∞",
    },
    "TXA.23": {
      name: "Distributed Copies (Code and Name of Recipients) ",
      required: "O",
      repeat: "∞",
    },
  },
  UB1: {
    "UB1.1": {
      name: "Set ID - UB1",
      required: "O",
      repeat: "1",
    },
    "UB1.2": {
      name: "Blood Deductible (43)",
      required: "B",
      repeat: "1",
    },
    "UB1.3": {
      name: "Blood Furnished-Pints Of (40)",
      required: "O",
      repeat: "1",
    },
    "UB1.4": {
      name: "Blood Replaced-Pints (41)",
      required: "O",
      repeat: "1",
    },
    "UB1.5": {
      name: "Blood Not Replaced-Pints (42)",
      required: "O",
      repeat: "1",
    },
    "UB1.6": {
      name: "Co-Insurance Days (25)",
      required: "O",
      repeat: "1",
    },
    "UB1.7": {
      name: "Condition Code (35-39)",
      required: "O",
      repeat: "5",
    },
    "UB1.8": {
      name: "Covered Days (23)",
      required: "O",
      repeat: "1",
    },
    "UB1.9": {
      name: "Non Covered Days (24)",
      required: "O",
      repeat: "1",
    },
    "UB1.10": {
      name: "Value Amount and Code (46-49)",
      required: "O",
      repeat: "8",
    },
    "UB1.11": {
      name: "Number Of Grace Days (90)",
      required: "O",
      repeat: "1",
    },
    "UB1.12": {
      name: "Special Program Indicator (44)",
      required: "O",
      repeat: "1",
    },
    "UB1.13": {
      name: "PSRO/UR Approval Indicator (87)",
      required: "O",
      repeat: "1",
    },
    "UB1.14": {
      name: "PSRO/UR Approved Stay-Fm (88)",
      required: "O",
      repeat: "1",
    },
    "UB1.15": {
      name: "PSRO/UR Approved Stay-To (89)",
      required: "O",
      repeat: "1",
    },
    "UB1.16": {
      name: "Occurrence (28-32)",
      required: "O",
      repeat: "5",
    },
    "UB1.17": {
      name: "Occurrence Span (33)",
      required: "O",
      repeat: "1",
    },
    "UB1.18": {
      name: "Occur Span Start Date (33)",
      required: "O",
      repeat: "1",
    },
    "UB1.19": {
      name: "Occur Span End Date (33)",
      required: "O",
      repeat: "1",
    },
    "UB1.20": {
      name: "UB-82 Locator 2",
      required: "B",
      repeat: "1",
    },
    "UB1.21": {
      name: "UB-82 Locator 9",
      required: "B",
      repeat: "1",
    },
    "UB1.22": {
      name: "UB-82 Locator 27",
      required: "B",
      repeat: "1",
    },
    "UB1.23": {
      name: "UB-82 Locator 45",
      required: "B",
      repeat: "1",
    },
  },
  UB2: {
    "UB2.1": {
      name: "Set ID - UB2",
      required: "O",
      repeat: "1",
    },
    "UB2.2": {
      name: "Co-Insurance Days (9)",
      required: "O",
      repeat: "1",
    },
    "UB2.3": {
      name: "Condition Code (24-30)",
      required: "O",
      repeat: "7",
    },
    "UB2.4": {
      name: "Covered Days (7)",
      required: "O",
      repeat: "1",
    },
    "UB2.5": {
      name: "Non-Covered Days (8)",
      required: "O",
      repeat: "1",
    },
    "UB2.6": {
      name: "Value Amount and Code (39-41)",
      required: "O",
      repeat: "12",
    },
    "UB2.7": {
      name: "Occurrence Code and Date (32-35)",
      required: "O",
      repeat: "8",
    },
    "UB2.8": {
      name: "Occurrence Span Code/Dates (36)",
      required: "O",
      repeat: "2",
    },
    "UB2.9": {
      name: "UB92 Locator 2 (State)",
      required: "O",
      repeat: "2",
    },
    "UB2.10": {
      name: "UB92 Locator 11 (State)",
      required: "O",
      repeat: "2",
    },
    "UB2.11": {
      name: "UB92 Locator 31 (National)",
      required: "O",
      repeat: "1",
    },
    "UB2.12": {
      name: "Document Control Number",
      required: "O",
      repeat: "2",
    },
    "UB2.13": {
      name: "UB92 Locator 49 (National)",
      required: "O",
      repeat: "23",
    },
    "UB2.14": {
      name: "UB92 Locator 56 (State)",
      required: "O",
      repeat: "5",
    },
    "UB2.15": {
      name: "UB92 Locator 57 (National)",
      required: "O",
      repeat: "1",
    },
    "UB2.16": {
      name: "UB92 Locator 78 (State)",
      required: "O",
      repeat: "2",
    },
    "UB2.17": {
      name: "Special Visit Count",
      required: "O",
      repeat: "1",
    },
  },
  URD: {
    "URD.1": {
      name: "R/U Date/Time",
      required: "O",
      repeat: "1",
    },
    "URD.2": {
      name: "Report Priority",
      required: "O",
      repeat: "1",
    },
    "URD.3": {
      name: "R/U Who Subject Definition",
      required: "R",
      repeat: "∞",
    },
    "URD.4": {
      name: "R/U What Subject Definition",
      required: "O",
      repeat: "∞",
    },
    "URD.5": {
      name: "R/U What Department Code",
      required: "O",
      repeat: "∞",
    },
    "URD.6": {
      name: "R/U Display/Print Locations",
      required: "O",
      repeat: "∞",
    },
    "URD.7": {
      name: "R/U Results Level",
      required: "O",
      repeat: "1",
    },
  },
  URS: {
    "URS.1": {
      name: "R/U Where Subject Definition",
      required: "R",
      repeat: "∞",
    },
    "URS.2": {
      name: "R/U When Data Start Date/Time",
      required: "O",
      repeat: "1",
    },
    "URS.3": {
      name: "R/U When Data End Date/Time",
      required: "O",
      repeat: "1",
    },
    "URS.4": {
      name: "R/U What User Qualifier",
      required: "O",
      repeat: "∞",
    },
    "URS.5": {
      name: "R/U Other Results Subject Definition",
      required: "O",
      repeat: "∞",
    },
    "URS.6": {
      name: "R/U Which Date/Time Qualifier",
      required: "O",
      repeat: "∞",
    },
    "URS.7": {
      name: "R/U Which Date/Time Status Qualifier",
      required: "O",
      repeat: "∞",
    },
    "URS.8": {
      name: "R/U Date/Time Selection Qualifier",
      required: "O",
      repeat: "∞",
    },
    "URS.9": {
      name: "R/U Quantity/Timing Qualifier",
      required: "O",
      repeat: "1",
    },
  },
  VAR: {
    "VAR.1": {
      name: "Variance Instance ID",
      required: "R",
      repeat: "1",
    },
    "VAR.2": {
      name: "Documented Date/Time",
      required: "R",
      repeat: "1",
    },
    "VAR.3": {
      name: "Stated Variance Date/Time",
      required: "O",
      repeat: "1",
    },
    "VAR.4": {
      name: "Variance Originator",
      required: "O",
      repeat: "∞",
    },
    "VAR.5": {
      name: "Variance Classification",
      required: "O",
      repeat: "1",
    },
    "VAR.6": {
      name: "Variance Description",
      required: "O",
      repeat: "∞",
    },
  },
  VTQ: {
    "VTQ.1": {
      name: "Query Tag",
      required: "O",
      repeat: "1",
    },
    "VTQ.2": {
      name: "Query/Response Format Code",
      required: "R",
      repeat: "1",
    },
    "VTQ.3": {
      name: "VT Query Name",
      required: "R",
      repeat: "1",
    },
    "VTQ.4": {
      name: "Virtual Table Name",
      required: "R",
      repeat: "1",
    },
    "VTQ.5": {
      name: "Selection Criteria",
      required: "O",
      repeat: "∞",
    },
  },

  ZPM: {
    "ZPM.1": { name: "Pocket Code", required: "?", repeat: "1" },
    "ZPM.2": { name: "PYXIS console name System", required: "?", repeat: "1" },
    "ZPM.3": { name: "Station Name", required: "?", repeat: "1" },
    "ZPM.4": { name: "Drawer Number", required: "?", repeat: "1" },
    "ZPM.5": { name: "Pocket Descriptor", required: "?", repeat: "1" },
    "ZPM.6": { name: "Item Id", required: "?", repeat: "1" },
    "ZPM.7": { name: "Item Name", required: "?", repeat: "1" },
    "ZPM.8": { name: "Item Class", required: "?", repeat: "1" },
    "ZPM.9": {
      name: "EBC (Expected Begin Count in pocket)",
      required: "?",
      repeat: "1",
    },
    "ZPM.10": {
      name: "ABC (Actual Begin count in pocket)",
      required: "?",
      repeat: "1",
    },
    "ZPM.11": { name: "Transaction Amount", required: "?", repeat: "1" },
    "ZPM.12": { name: "User ID", required: "?", repeat: "1" },
    "ZPM.13": { name: "User Name", required: "?", repeat: "1" },
    "ZPM.14": { name: "Witness ID", required: "?", repeat: "1" },
    "ZPM.15": { name: "Witness Name", required: "?", repeat: "1" },
    "ZPM.16": {
      name: "Total Count of Item in station",
      required: "?",
      repeat: "1",
    },
    "ZPM.17": { name: "Alt Item ID", required: "?", repeat: "1" },
    "ZPM.18": { name: "Facility Code", required: "?", repeat: "1" },
    "ZPM.19": { name: "Alt Item ID2", required: "?", repeat: "1" },
    "ZPM.20": { name: "Nursing Unit", required: "?", repeat: "1" },
    "ZPM.21": { name: "Subdrawer", required: "?", repeat: "1" },
    "ZPM.22": { name: "Full Count in pocket", required: "?", repeat: "1" },
    "ZPM.23": { name: "Par count in pocket", required: "?", repeat: "1" },
    "ZPM.24": { name: "Transaction Time", required: "?", repeat: "1" },
    "ZPM.25": { name: "Lot Number", required: "?", repeat: "1" },
    "ZPM.26": { name: "Serial Number", required: "?", repeat: "1" },
  },

  ZI1: {
    "ZI1.1": { name: "Order Instruction", required: "?", repeat: "1" },
    "ZI1.2": { name: "Remarks", required: "?", repeat: "1" },
    "ZI1.3": { name: "Intake Action", required: "?", repeat: "1" },
    "ZI1.4": { name: "Cautionary", required: "?", repeat: "1" },
    "ZI1.5": { name: "MIMS Override Remark", required: "?", repeat: "1" },
  },

  // ZMI - Formulary Maintenance Segment
  ZMI: {
    "ZMI.1": { name: "Item File Entry", required: "?", repeat: "1" },
    "ZMI.2": { name: "Location", required: "?", repeat: "1" },
    "ZMI.3": { name: "Charge ID", required: "?", repeat: "1" },
    "ZMI.4": { name: "Brand Name Drug", required: "?", repeat: "1" },
    "ZMI.5": { name: "Par. Level", required: "?", repeat: "1" },
    "ZMI.6": { name: "Reorder Point", required: "?", repeat: "1" },
    "ZMI.7": { name: "Critically Low Level", required: "?", repeat: "1" },
    "ZMI.8": { name: "Quantity on Hand", required: "?", repeat: "1" },
    "ZMI.9": { name: "Unit of Order", required: "?", repeat: "1" },
    "ZMI.10": { name: "Unit of Issue", required: "?", repeat: "1" },
    "ZMI.11": { name: "Normal Reorder Source", required: "?", repeat: "1" },
    "ZMI.12": { name: "Normal Reorder Binloc", required: "?", repeat: "1" },
    "ZMI.13": {
      name: "Critically Low Reorder Source",
      required: "?",
      repeat: "1",
    },
    "ZMI.14": {
      name: "Critically Low Reorder Binloc",
      required: "?",
      repeat: "1",
    },
    "ZMI.15": { name: "Billable Ind.", required: "?", repeat: "1" },
    "ZMI.16": { name: "Item Cost", required: "?", repeat: "1" },
    "ZMI.17": { name: "Item Price", required: "?", repeat: "1" },
    "ZMI.18": { name: "Unit Dose Strength", required: "?", repeat: "1" },
    "ZMI.19": { name: "Unit Dose Volume", required: "?", repeat: "1" },
    "ZMI.20": { name: "Total Volume", required: "?", repeat: "1" },
    "ZMI.21": { name: "Unit Dose Drug From", required: "?", repeat: "1" },
    "ZMI.22": { name: "Dea Schedule", required: "?", repeat: "1" },
    "ZMI.23": { name: "Manufacturer", required: "?", repeat: "1" },
    "ZMI.24": { name: "??", required: "?", repeat: "1" },
    "ZMI.25": { name: "??", required: "?", repeat: "1" },
    "ZMI.26": { name: "??", required: "?", repeat: "1" },
    "ZMI.27": { name: "??", required: "?", repeat: "1" },
    "ZMI.28": { name: "??", required: "?", repeat: "1" },
    "ZMI.29": { name: "??", required: "?", repeat: "1" },
  },

  // ZFM - Formulary Maintenance Segment
  ZFM: {
    "ZFM.1": { name: "Formulary Code", required: "?", repeat: "1" },
    "ZFM.2": { name: "Drug ID", required: "?", repeat: "1" },
    "ZFM.3": { name: "Drug Name", required: "?", repeat: "1" },
    "ZFM.4": { name: "Medication Class", required: "?", repeat: "1" },
    "ZFM.5": { name: "Alt Med ID", required: "?", repeat: "1" },
    "ZFM.6": { name: "Facility Code", required: "?", repeat: "1" },
    "ZFM.7": { name: "Brand Name", required: "?", repeat: "1" },
    "ZFM.8": { name: "Dosage From", required: "?", repeat: "1" },
    "ZFM.9": { name: "Strength", required: "?", repeat: "1" },
    "ZFM.10": { name: "Strength Units", required: "?", repeat: "1" },
    "ZFM.11": { name: "Volume", required: "?", repeat: "1" },
    "ZFM.12": { name: "Volume Units", required: "?", repeat: "1" },
    "ZFM.13": { name: "Alt Med2 ID", required: "?", repeat: "1" },
    "ZFM.14": { name: "Therapeutic Class", required: "?", repeat: "1" },
    "ZFM.15": { name: "Cost", required: "?", repeat: "1" },
    "ZFM.16": { name: "Charge", required: "?", repeat: "1" },
    "ZFM.17": { name: "Manufacturer", required: "?", repeat: "1" },
    "ZFM.18": { name: "??", required: "?", repeat: "1" },
    "ZFM.19": { name: "??", required: "?", repeat: "1" },
    "ZFM.20": { name: "??", required: "?", repeat: "1" },
  },

  ZPD: {
    "ZPD.1": { name: "MTP", required: "?", repeat: "1" },
    "ZPD.2": { name: "New born", required: "?", repeat: "1" },
    "ZPD.3": { name: "Birth time", required: "?", repeat: "1" },
    "ZPD.4": { name: "Foreign National", required: "?", repeat: "1" },
    "ZPD.5": { name: "Visa Type", required: "?", repeat: "1" },
    "ZPD.6": { name: "Visa Number", required: "?", repeat: "1" },
    "ZPD.7": { name: "Visa Validity", required: "?", repeat: "1" },
    "ZPD.8": { name: "Passport No.", required: "?", repeat: "1" },
    "ZPD.9": { name: "Place of Issue", required: "?", repeat: "1" },
    "ZPD.10": { name: "Expiry Date", required: "?", repeat: "1" },
    "ZPD.12": { name: "Father Name ", required: "?", repeat: "1" },
    "ZPD.13": { name: "Identifier Type", required: "?", repeat: "1" },
    "ZPD.14": { name: "Identifier Value", required: "?", repeat: "1" },
    "ZPD.15": { name: "Place of issue", required: "?", repeat: "1" },
    "ZPD.16": { name: "Issue Date", required: "?", repeat: "1" },
    "ZPD.17": { name: "Expiry Date", required: "?", repeat: "1" },
    "ZPD.18": { name: "Discount Scheme", required: "?", repeat: "1" },
    "ZPD.19": { name: "From Date(dd/mm/yyyy)", required: "?", repeat: "1" },
    "ZPD.20": { name: "To Date(dd/mm/yyyy)", required: "?", repeat: "1" },
    "ZPD.21": { name: "House No. Street", required: "?", repeat: "1" },
    "ZPD.22": { name: "Country", required: "?", repeat: "1" },
    "ZPD.23": { name: "State", required: "?", repeat: "1" },
    "ZPD.24": { name: "City", required: "?", repeat: "1" },
    "ZPD.25": { name: "Area", required: "?", repeat: "1" },
    "ZPD.26": { name: "Pin Code", required: "?", repeat: "1" },
    "ZPD.27": {
      name: "ABHA Registration with Aadhar",
      required: "?",
      repeat: "1",
    },
  },

  ZPU: {
    "ZPU.1": { name: "MTP", required: "?", repeat: "1" },
    "ZPU.2": { name: "New born", required: "?", repeat: "1" },
    "ZPU.3": { name: "Birth time", required: "?", repeat: "1" },
    "ZPU.4": { name: "Foreign National", required: "?", repeat: "1" },
    "ZPU.5": { name: "Visa Type", required: "?", repeat: "1" },
    "ZPU.6": { name: "Visa Number", required: "?", repeat: "1" },
    "ZPU.7": { name: "Visa Validity", required: "?", repeat: "1" },
    "ZPU.8": { name: "Passport No.", required: "?", repeat: "1" },
    "ZPU.9": { name: "Place of Issue", required: "?", repeat: "1" },
    "ZPU.10": { name: "Expiry Date", required: "?", repeat: "1" },
    "ZPU.11": { name: "Relation", required: "?", repeat: "1" },
    "ZPU.12": { name: "Father Name ", required: "?", repeat: "1" },
    "ZPU.13": { name: "Identifier Type", required: "?", repeat: "1" },
    "ZPU.14": { name: "Identifier Value", required: "?", repeat: "1" },
    "ZPU.15": { name: "Place of issue", required: "?", repeat: "1" },
    "ZPU.16": { name: "Issue Date", required: "?", repeat: "1" },
    "ZPU.17": { name: "Expiry Date", required: "?", repeat: "1" },
    "ZPU.18": { name: "Discount Scheme", required: "?", repeat: "1" },
    "ZPU.19": { name: "From Date(dd/mm/yyyy)", required: "?", repeat: "1" },
    "ZPU.20": { name: "To Date(dd/mm/yyyy)", required: "?", repeat: "1" },
    "ZPU.21": { name: "House No. Street", required: "?", repeat: "1" },
    "ZPU.22": { name: "Country", required: "?", repeat: "1" },
    "ZPU.23": { name: "State", required: "?", repeat: "1" },
    "ZPU.24": { name: "City", required: "?", repeat: "1" },
    "ZPU.25": { name: "Area", required: "?", repeat: "1" },
    "ZPU.26": { name: "Pin Code", required: "?", repeat: "1" },
  },
};

export default fieldInfoArr;
