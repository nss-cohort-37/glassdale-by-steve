import CriminalList from "./Criminal/CriminalList.js"
import {getCriminals} from "./Criminal/CriminalProvider.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import { getCrimes } from "./convictions/ConvictionProvider.js"

getCrimes()
    .then(ConvictionSelect)
    .then(getCriminals)
    .then(CriminalList)
