const sections = document.querySelectorAll(".deal")
const titles = document.querySelectorAll(".title")
const thumbNails = document.querySelectorAll(".thumb")
const ratings = document.querySelectorAll(".rating")
const nPrice = document.querySelectorAll(".normalPrice")
const sPrice = document.querySelectorAll(".salePrice")
const salePerc = document.querySelectorAll(".salePercent")
console.log(sections)

fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
  .then(res => res.json())
  .then(data => {
    sections.forEach((sect, idx) => {
      //populates the game title and thumbnail on the left
      titles[idx].innerText = data[idx].title
      thumbNails[idx].src = data[idx].thumb
      //populates the price and ratings on the right
      ratings[idx].innerText = `${data[idx].steamRatingText} - ${data[idx].steamRatingPercent}%`
      nPrice[idx].innerText = `$${data[idx].normalPrice}`
      sPrice[idx].innerText = `$${data[idx].salePrice}`

      //populates the green sale % numbers
      let percentEstimate = Math.floor((1 - +data[idx].salePrice / +data[idx].normalPrice) * 100)
      salePerc[idx].innerText = `- ${percentEstimate}%`
      // console.log( +data[idx].salePrice + +data[idx].normalPrice)
      // console.log(data[idx])

      // gives each section a slide in animation
      sect.classList.add("slidein")
    })
  })
  .catch(err => {
    console.log(`Error: ${err}`)
  })