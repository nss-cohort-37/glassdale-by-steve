import { getCriminals } from "./Criminal/CriminalProvider.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import CriminalList from "./Criminal/CriminalList.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import OfficerSelect from "./officers/OfficerSelect.js"

const loadData = () => {
    return getConvictions()
        .then(getCriminals)
        .then(getOfficers)
}

loadData()
    .then(ConvictionSelect)
    .then(OfficerSelect)
    .then(CriminalList)

