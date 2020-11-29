
export default {
  fade(){
    let text_about = document.querySelector('.text_about');
    util.show(text_about, util.text_about, 'animate__fadeInRight')
    window.addEventListener('scroll', () => {
      util.show(text_about, util.text_about, 'animate__fadeInRight')
    })
  }
}
