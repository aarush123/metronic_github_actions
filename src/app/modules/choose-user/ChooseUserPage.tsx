/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { KTSVG } from '../../../_metronic/helpers'
import { Field } from 'formik'

const ChooseUserLayout: FC = () => {

  return (

    <div className='w-100'>
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'>Choose your Company</h1>
      </div>

      <div className='fv-row'>

        <div className='row'>
          <div className='col-lg-6' >
            <Field
              type='radio'
              className='btn-check'
              name='userType'
              value='freelancer'
              id='kt_create_account_form_user_type_freelancer'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='kt_create_account_form_user_type_freelancer'
            >
              <KTSVG
                path='/media/icons/duotune/communication/com005.svg'
                className='svg-icon-3x me-5'
              />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-6 mb-2'>Freelancer</span>
                <span className='text-gray-400 fw-bold fs-8'>
                  Your personal space
                </span>
              </span>
            </label>
          </div>

          <div className='col-lg-6'>
            <Field
              type='radio'
              className='btn-check'
              name='userType'
              value='company'
              id='kt_create_account_form_user_type_company'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
              htmlFor='kt_create_account_form_user_type_company'
            >
              <KTSVG path='/media/icons/duotune/finance/fin006.svg' className='svg-icon-3x me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-6 mb-2'>Company A</span>
                <span className='text-gray-400 fw-bold fs-8'>
                  Joined on 24-06-22
                </span>
              </span>
            </label>
          </div>
        </div>

      </div>
      <div className='text-center mb-10 pt-6' >
        <Link to='/dashboard' className='btn btn-lg btn-primary me-3'>
          <span className='indicator-label'>
            Continue
            <KTSVG
              path='/media/icons/duotune/arrows/arr064.svg'
              className='svg-icon-3 ms-2 me-0'
            />
          </span>
        </Link>
      </div>
    </div >
  )
}

export { ChooseUserLayout }

