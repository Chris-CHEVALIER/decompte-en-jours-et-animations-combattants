const fighter1 = document.getElementById('fighter-1')
const fighter2 = document.getElementById('fighter-2')

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 400) {
    fighter1.classList.remove('from-center-to-left')
    fighter2.classList.remove('from-center-to-right')
    fighter1.classList.add('from-left-to-center')
    fighter2.classList.add('from-right-to-center')
  } else {
    fighter1.classList.remove('from-left-to-center')
    fighter2.classList.remove('from-right-to-center')
    fighter1.classList.add('from-center-to-left')
    fighter2.classList.add('from-center-to-right')
  }
})

function showTime () {
  const now = moment(new Date()) //todays date
  const futureDate = moment('2025-06-28') // Préciser la date de l'événement au format anglais (yyyy-mm-dd)
  const duration = moment.duration(futureDate.diff(now)) // Calcule la difference entre la date visé et aujourd'hui (maintenant)
  const timeDiv = document.getElementById('time') // Récupère l'élément où afficher le décompte
  timeDiv.textContent = `${futureDate.diff(
    now,
    'days'
  )} jours, ${duration.hours()} heures, ${duration.minutes()} minutes, ${duration.seconds()} secondes`
  window.setTimeout('showTime();', 1000) // L'affichage se met à jour chaque seconde
}

showTime()
