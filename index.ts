import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// Mike works at WellsFargo and likes to drink Corona

const randomName$ = ajax('https://random-data-api.com/api/v2/users');

const randomBank$ = ajax('https://random-data-api.com/api/v2/banks');

const randomBeer$ = ajax('https://random-data-api.com/api/v2/beers');

randomName$.subscribe((ajaxResponse) =>
  console.log(ajaxResponse.response.first_name)
);

randomBank$.subscribe((ajaxResponse) =>
  console.log(ajaxResponse.response.bank_name)
);

randomBeer$.subscribe((ajaxResponse) =>
  console.log(ajaxResponse.response.name)
);

forkJoin(randomName$, randomBank$, randomBeer$).subscribe(
  ([nameAjax, bankAjax, beerAjax]) =>
    console.log(
      `${nameAjax.response.first_name} works at ${bankAjax.response.bank_name} and likes to drink ${beerAjax.response.name}`
    )
);
