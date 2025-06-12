import '../styles/Inscrip.css';
import React from 'react';

function Inscrip() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const form = e.target;
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                alert('Votre inscription a bien été prise en compte !');
                window.location.href = form.querySelector('[name="_next"]').value;
            } else {
                throw new Error('Erreur lors de l\'envoi');
            }
        } catch (error) {
            alert('Une erreur est survenue. Veuillez réessayer.');
            console.error(error);
        }
    };

    return (
        <div className='content_main'>
          <form 
    className='content_form' 
    action="https://formsubmit.co/fa0055970@gmail.com" 
    method="POST"
    onSubmit={handleSubmit}
>
    <input type='text' name='nom' placeholder='Entrez votre nom' className='content_input' required />
    <input type='text' name='prenom' placeholder='Entrez votre prénom' className='content_input' required />
    <input type='date' name='date' className='content_input' required />
    <input type='time' name='heure' className='content_input' required />
    <select name='nombre_personnes' className='content_input' required>
        <option value="">Combien serez-vous ?</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    
    {/* Ajout du champ email recommandé par FormSubmit */}
    <input type='email' name='email' placeholder='Entrez votre email' className='content_input' required />
    
    <button type='submit' className='content_button'>Envoyer</button>
    
    {/* Paramètres FormSubmit - gardez un seul de chaque */}
    <input type="hidden" name="_next" value="https://votresite.com/merci" />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_subject" value="Nouvelle réservation !" />
    
    {/* Champ honeypot anti-spam - une seule version suffit */}
    <input type="text" name="_honey" style={{display: 'none'}} />
    
    {/* Optionnel : token pour identification */}
    <input type="hidden" name="_autoresponse" value="Merci pour votre réservation !" />
</form>
        </div>
    );
}

export default Inscrip;