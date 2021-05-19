import { useCallback } from 'react';

export const useMessage = () => {
  return useCallback((text, status) => {
    const errDisplay = document.querySelector('.error-display');

    if (errDisplay && text) {
      const errDiv = document.createElement('div');
      errDiv.classList.add('alert');
      if (status === 'error')
        errDiv.classList.add('alert-danger');
      if (status === 'success')
        errDiv.classList.add('alert-success');
      errDiv.classList.add('alert-dismissible');
      errDiv.classList.add('fade');
      errDiv.classList.add('show');
      errDiv.setAttribute('role', 'alert');
      errDiv.innerText = text;

      const closeBtn = document.createElement('button');
      closeBtn.setAttribute('type', 'button');
      closeBtn.classList.add('btn-close');
      closeBtn.dataset.bsDismiss = 'alert';
      closeBtn.setAttribute('aria-label', 'Close');

      errDiv.appendChild(closeBtn);
      errDisplay.appendChild(errDiv);
    }
  }, []);
};
