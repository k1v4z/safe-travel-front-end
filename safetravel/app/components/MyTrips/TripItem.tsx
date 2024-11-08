import React, { useState } from "react";
import Image from "next/image"
import Link from "next/link";
import { formatDate } from "@/app/lib/formatDate";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

interface TripItemProps {
  plan: any;
}

const TripItem = (tripItemProps: TripItemProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editTitle, setEditTitle] = useState(tripItemProps.plan.title);
  const [editDate, setEditDate] = useState(tripItemProps.plan.date);
  const [editTransportation, setEditTransportation] = useState(tripItemProps.plan.transportation);
  const [editHaveChildren, setEditHaveChildren] = useState(tripItemProps.plan.have_children);
  const [editKindName, setEditKindName] = useState(tripItemProps.plan.kind.name);
  
   const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const openEditForm = () => {
    setShowEditForm(true);
    setShowMenu(false);
  };

  const closeEditForm = () => {
    setShowEditForm(false);
  };

  const handleDelete = async (planId: string) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/delete-plan/${planId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful response
      console.log('Plan deleted successfully');
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const confirmDelete = (planId: string) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to delete this plan?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleDelete(planId)
        },
        {
          label: 'No',
          onClick: () => setShowMenu(false)
        }
      ]
    });
  };

  const handleEditSubmit = async (planId: string, e: any) => {
    e.preventDefault();
    // Handle the edit submit logic here
    const planEditData = {
      planEditData: {
        title: editTitle,
        date: new Date(editDate).toISOString(),
        transportation: editTransportation,
        have_children: editHaveChildren,
        kind_name: editKindName,
      }
    };

    try {
      console.log(planEditData);
      const response = await fetch(`http://localhost:8080/api/v1/edit-plan/${planId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(planEditData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful response
      console.log('Plan updated successfully');
      window.location.reload();
      //closeEditForm();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="flex bg-white rounded-lg shadow-md p-4 items-center">
      <Image
      //Optimize later
        src={`${tripItemProps.plan.plan_on_province[0].province.imageUrl}`}
        alt="Hue with family"
        width={300}
        height={200}
        className="rounded-lg object-cover"
      />
      <div className="flex flex-col justify-between ml-4">
        <Link href={`/plan/${tripItemProps.plan.id}`}>
          <h2 className="text-2xl font-gideonroman font-bold">{tripItemProps.plan.title}</h2>
        </Link>
        <p className="text-lg text-gray-800 font-gideonroman">
          🗓️ {formatDate(tripItemProps.plan.date)}
          <Image
            src="/pictures/location-plan-icon.png"
            alt="Hue Icon"
            width={25}
            height={25}
            className="inline ml-2 font-gideonroman"
          />
          {tripItemProps.plan.plan_on_province[0].province.name}
        </p>
        <p className="font-gideonroman">Transportation: {tripItemProps.plan.transportation}</p>
        <p className="font-gideonroman">Kind: {tripItemProps.plan.kind.name}</p>
      </div>
      <div onClick={toggleMenu} className="ml-auto text-2xl cursor-pointer">⋯</div>
      {showMenu && (
        <div className="absolute right-5 mt-2 w-48 bg-white border rounded shadow-lg">
          <button className="block w-full text-left px-4 py-2 hover:bg-blue-400" onClick={openEditForm}>Edit</button>
          <button className="block w-full text-left px-4 py-2 hover:bg-red-500" onClick={() => confirmDelete(tripItemProps.plan.id)}>Delete</button>
        </div>
      )}
      {showEditForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-30" onClick={closeEditForm}></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-50">
            <h2 className="text-2xl font-semibold mb-4">Edit Trip</h2>
            <form onSubmit={(e) => {handleEditSubmit(tripItemProps.plan.id, e)}}>
              <label className="block font-bold text-gray-950 mb-1" htmlFor="trip-title">Title</label>
              <input
                type="text"
                id="trip-title"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block font-bold text-gray-950 mb-1" htmlFor="trip-date">Date</label>
              <input
                type="date"
                id="trip-date"
                value={new Date(editDate).toISOString().split('T')[0]}
                onChange={(e) => setEditDate(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block font-bold text-gray-950 mb-1" htmlFor="trip-transportation">Transportation</label>
              <input
                type="text"
                id="trip-transportation"
                value={editTransportation}
                onChange={(e) => setEditTransportation(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block font-bold text-gray-950 mb-1" htmlFor="trip-have-children">Have Children</label>
              <input
                type="checkbox"
                id="trip-have-children"
                checked={editHaveChildren}
                onChange={(e) => setEditHaveChildren(e.target.checked)}
                className="mb-4"
              />
              <label className="block font-bold text-gray-950 mb-1" htmlFor="trip-kind-name">Kind</label>
              <input
                type="text"
                id="trip-kind-name"
                value={editKindName}
                onChange={(e) => setEditKindName(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Save</button>
              <button type="button" onClick={closeEditForm} className="ml-2 bg-gray-500 text-white py-2 px-4 rounded">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripItem;
