function makeid(length: number) {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const subject = `We Need a Budget That Represents US ID(${makeid(10)})`

export interface BodyOptions {
  name: string
  city: string
}

export const makeBody = (opts: BodyOptions) =>
  `Hello,

My name is ${opts.name} from ${
    opts.city
  }. I am emailing to demand the restructuring of our city budget, to prioritize social services in community and to drastically minimize spending on Police. It is unacceptable that such a large portion of the city’s budget is going to the police department.

This level of police funding does not align with my values, and reflects poorly on our community. I implore that you and other city officials draft and approve a budget that diverts funds from the police department and reallocates more to those in need.  

Defunding the police and restructuring the budget is a necessity – now more than ever. Across the U.S., police perpetuate a pattern of excessive violence and force, especially directed toward black people and communities. Meanwhile, departments and officers refuse to hold their own accountable. This is unacceptable.

We are in the middle of a global pandemic that has killed more than 115,000 Americans, a disproportionate number of which were people of color. Over 40 million have filed for unemployment. Healthcare workers are without proper equipment, and essential workers are not fairly compensated or protected. We don’t need more police; we need more social safety nets. Funds intended for police would be better served by  contributing to initiatives that:

Enrich programs that invest in opportunity for people of color
Provide more affordable housing and mental health care initiatives
Widen access to COVID-19 tests and resources
Protect and bolster our parks
Support small businesses struggling due to COVID-19
Provide cheaper and cleaner modes of public transportation

Our nation is grieving the deaths of black Americans who were murdered at the hands of police. Many officers are not being held accountable. While the police department is busy buying weaponry and armored vehicles, we have communities that desperately need funding. Every day they don't receive it, their quality of life worsens. Thousands have died unnecessarily. You have the ability to change this. 
Speak up for the underserved and less powerful. The moment is now, I sincerely hope you are listening. 

Email ID: ${makeid(10)}

Sincerely, 
${opts.name}`
